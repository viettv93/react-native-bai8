import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const Hearder = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    resizeMode="cover"
                    source={require('../anh/rectangle.png')}
                    style={{ height: 200}}
                >
                    <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 18, paddingVertical: 30 }}>
                        <View style={{ flex: 5 }}>
                            <Image
                                source={require('../anh/icon3.png')}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 2 }}>
                            <Image source={require('../anh/icon8.png')}
                                resizeMode='contain' />
                            <Image source={require('../anh/icon2.png')}
                                resizeMode="contain" />
                            <Image source={require('../anh/icon.png')} />
                        </View>
                    </View>
                    <Image style={{ position: 'absolute', bottom: -60, right: 18 , height: 110, width: 110}} source={require('../anh/ellipse.png')}
                        resizeMode="cover" />
                </ImageBackground>
            </View>
            <View style={{ flex: 1, marginHorizontal: 18, marginTop: 20 }}>
                <Text style={{ color: '#000000', fontSize: 26, fontWeight: '600' }}>Kate Winslet</Text>
                <View style={{ flexDirection: 'row',alignItems: 'center'  }}>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ fontSize: 18, color: '#000000', fontWeight: '600', marginRight: 5  }}>9868</Text>
                        <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>Followers</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                        <Text style={{ fontSize: 18, color: '#000000', fontWeight: '600', marginRight: 5 }}>686</Text>
                        <Text style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>Following</Text>
                    </View>
                </View>
                <Text numberOfLines={2}
                    style={{ fontSize: 15, color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400' }}>A dog is the only thing that loves you more than you love yourself.</Text>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 18, color: '#000000', fontWeight: '600' }}>My pet</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={require('../anh/frame8.png')}
                            resizeMode="cover" style={{width: 42.9, height: 28.6}}/>
                        <Image source={require('../anh/group7.png')}
                            resizeMode="cover"
                            style={{ marginLeft: 10 ,height: 28.6, width: 28.6}} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 80 }}>
                    <Text style={{ fontSize: 19, color: '#FA6650', fontWeight: '500' }}>Dynamic</Text>
                    <Text style={{ fontSize: 19, color: '#000000', fontWeight: '500' }}>Answer</Text>
                    <Text style={{ fontSize: 19, color: '#000000', fontWeight: '500' }}>Article</Text>
                    <Text style={{ fontSize: 19, color: '#000000', fontWeight: '500' }}>Video</Text>
                </View>
                <Image source={require('../anh/ten.png')}
                    resizeMode="contain"
                    style={{ position: 'absolute', bottom: 0, left: 27 }} />
            </View>
        </View>
    )
}

export default Hearder