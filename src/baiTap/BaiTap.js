import React from "react"
import { FlatList, View, Image, Text } from 'react-native'
import Header from '../baiTap/Hearder'


const array = [{ avatar: require('../anh/ellipse4.png'), name: 'Kate Winslet', address: 'Golden Retriever · Fayetteville', status: "Isn't five-month-old Teddy cute? 😏 😏", image: require('../anh/frame.png'), image2: require('../anh/frame2.png'), image3: require('../anh/frame3.png'), numberlike: 8.618, likeicon: require('../anh/icon4.png'), commenticon: require('../anh/icon5.png'), numbercomment: 148, shareicon: require('../anh/union.png'), numershare: 568, andtask: require('../anh/icon6.png') },
{ avatar: require('../anh/ellipse4.png'), name: 'Kate Winslet', address: 'Golden Retriever · Fayetteville', status: "It's a joy to work with dogs. Life is great.", image: require('../anh/material.png'), numberlike: 278, likeicon: require('../anh/icon4.png'), numbercomment: 88, commenticon: require('../anh/icon5.png'), numershare: 48, shareicon: require('../anh/union.png'), andtask: require('../anh/icon6.png') },
{ avatar: require('../anh/ellipse4.png'), name: 'Kate Winslet', address: "Labrador Peninsula · Fayetteville", status: "Does your dog bite?", image: require('../anh/material2.png'), numberlike: 5.233, likeicon: require('../anh/icon4.png'), numbercomment: 168, commenticon: require('../anh/icon5.png'), numershare: 5.233, shareicon: require('../anh/union.png'), andtask: require('../anh/icon6.png') },
{ avatar: require('../anh/ellipse5.png'), name: 'Angela', address: 'Golden Retriever · Fayetteville', status: "A dog is the only kind of love that money can buy.", image: require('../anh/frame7.png'), image2: require('../anh/frame4.png'), image3: require('../anh/frame5.png'), numberlike: 186, likeicon: require('../anh/icon4.png'), numbercomment: 68, commenticon: require('../anh/icon5.png'), numershare: 108, shareicon: require('../anh/union.png'), andtask: require('../anh/icon6.png') },
{ avatar: require('../anh/ellipse7.png'), name: 'Christine', address: 'Labrador Peninsula · Fayetteville', status: "Among the many small animals, I like the dog the most.", image: require('../anh/material4.png') },
]
const BaiTap = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={{ padding: 7, marginHorizontal: 18, marginTop: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.avatar}
                        resizeMode='cover' 
                        style={{width: 40, height: 40}}/>
                    <View style={{ marginLeft: 7 }}>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500' }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>{item.address}</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400' }}>{item.status}</Text>
                <View style={{ marginTop: 5 }}>
                    {item.image2 ? (
                        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                            <Image source={item.image} resizeMode="cover"  style={{width: 123, height: 123}}/>
                            <Image source={item.image2} resizeMode="cover" style={{width: 123, height: 123}}/>
                            <Image source={item.image3} resizeMode="cover" style={{width: 123, height: 123}}/>
                        </View>
                    ) : (
                        <View style={{justifyContent: 'center'}}>
                            <Image source={item.image} resizeMode='stretch' style={{width: '100%'}} />
                        </View>
                    )}
                </View>
                <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center' }}>
                        <Image source={item.likeicon} resizeMode="contain" />
                        <Text style={{ marginLeft: 3, fontSize: 18, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>{item.numberlike}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center' }}>
                        <Image source={item.commenticon} resizeMode="contain" />
                        <Text style={{ marginLeft: 3, fontSize: 18, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>{item.numbercomment}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.shareicon} resizeMode="contain" />
                        <Text style={{ marginLeft: 3, fontSize: 18, color: 'rgba(0, 0, 0, 0.4)', fontWeight: '400' }}>{item.numershare}</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <Image source={item.andtask} resizeMode="contain" />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={<Header />}
                data={array}
                style={{ flex: 3 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default BaiTap