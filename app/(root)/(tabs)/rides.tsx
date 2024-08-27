import RideCard from "@/components/RideCard"
import { images } from "@/constants"
import { useFetch } from "@/lib/fetch"
import { Ride } from "@/types/type"
import { useUser } from "@clerk/clerk-expo"
import { ActivityIndicator, Image, Text, View } from "react-native"
import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Rides = () => {
  const { user } = useUser()
  const {data: recentRides, loading} = useFetch<Ride[]>(`/(api)/ride/${user?.id}`, )

  return (
    <SafeAreaView>
        <FlatList
          data={recentRides}
          renderItem={({ item }) => <RideCard ride={item} />}
          className='px-5'
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={{
              paddingBottom: 100
          }}
          ListEmptyComponent={() => (
              <View className='flex flex-col items-center justify-center'>
                  {!loading ? (
                    <>
                      <Image
                        source={images.noResult}
                        alt='No recent rides found'
                        resizeMode='contain'
                        className='w-20 h-20'
                      />
                      <Text className='text-sm mb-5'>
                        No recent rides found
                      </Text>
                    </>
                  ): (
                    <ActivityIndicator
                      size={'small'}
                      color={'#000'}
                    />
                  )}
              </View>
          )}
          ListHeaderComponent={() => (
            <>
              <Text className='text-2xl font-JakartaBold mt-5 mb-3'>
                  All Rides
              </Text>
            </>
          )}
        />
    </SafeAreaView>
  )
}

export default Rides