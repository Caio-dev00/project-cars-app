import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { db } from '../../services/firebaseConnection'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { CarsProps } from '../../types/cars.type'
import { CarList } from '../../components/carList'

export function Home() {
  const [searchInput, setsearchInput] = useState("")
  const [ cars, setCars] = useState<CarsProps[]>([])
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars(){ 
      await loadCars();
    }
    fetchCars();
  }, [])

  async function loadCars () {
      const carsRef = collection(db, "cars");
      const queryRef = query(carsRef, orderBy("created", "desc"))

      getDocs(queryRef)
      .then((snapshot) => {
        let listCars = [] as CarsProps[];
        snapshot.forEach(doc => {
          listCars.push({
            id: doc.id,
            name: doc.data().name,
            owner: doc.data().owner,
            uid: doc.data().uid,
            city: doc.data().city,
            images: doc.data().images,
            km: doc.data().km,
            year: doc.data().year,
            price: doc.data().price,
          })
        })
        setCars(listCars)
        setLoading(false)
      })
  }

  return (
    <>
      <Header/>

      <View style={styles.container}>
        <View style={styles.inputArea}>
            <Input
              placeholder='Procurando algum carro?...'
              value={searchInput}
              onChangeText={(text) => setsearchInput(text)}
            />
        </View>

        { loading &&  (
          <ActivityIndicator style={{ marginTop: 14 }} size="large" color="#000" />
        )}

        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <CarList data={item} widthScreen={ cars.length <= 1 ? "100%" : "49%"} />}
          style={styles.list}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 14 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f3f5f8",
      flex: 1,
      paddingHorizontal: 14,
      alignItems: "center",
    },
    inputArea: {
      width: "100%",
      marginTop: 8,
      backgroundColor: "#FFF",
      borderRadius: 8
    },
    list: {
      flex: 1,
      marginTop: 4,
      paddingTop: 14,
    }
})