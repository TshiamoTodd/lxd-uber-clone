import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import { Href, router } from "expo-router";
import { Text, View } from "react-native"

const FindRide = () => {
    const { 
        userAddress, 
        destinationAddress, 
        setDestinationLocation, 
        setUserLocation 
    } = useLocationStore();

    const mockUserAddress = {
        latitude: -25.528053713009452,
        longitude: 28.045385260665125,
        address: 'Sekwenqe Street, Mabopane'
    } as {latitude: number, longitude: number, address: string}

    const mockDestinationAddress = {
        latitude: -25.523904762759027,
        longitude: 28.036008574077464,
        address: 'Morula Shopping Complex, Mabopane'
    } as {latitude: number, longitude: number, address: string}

    return (
        <RideLayout title="Ride" snapPoints={['80%']}>
            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">
                    From
                </Text>
                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={userAddress ? userAddress : mockUserAddress.address}
                    containerStyle="bg-neutral-100 shadow-md"
                    textInputBackgroundColor="#f5f5f5"
                    handlePress={(location) => setUserLocation(location)}
                />
            </View>
            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">
                    To
                </Text>
                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={destinationAddress ? destinationAddress : mockDestinationAddress.address}
                    containerStyle="bg-neutral-100 shadow-md"
                    textInputBackgroundColor="transparent"
                    handlePress={(location) => setDestinationLocation(location)}
                />
            </View>
            <CustomButton
                title="Find now"
                onPress={() => router.push('/(root)/confirm-ride' as Href)}
                className="mt-5"
            />
        </RideLayout>
    )
}

export default FindRide