import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Card, CardItem, Item, Picker, Icon, Label, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { KEY, URL } from '../utils/Const';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            provinces: [],
        }
    }

    componentDidMount(){
        this.onLoadProvince()
    }

    onLoadProvince = () => {
        fetch(URL+'/province',{
            method: 'GET',
            headers: {
                'key': KEY
            }
        }).then((response)=>response.json())
        .then((responseData)=>{
            let status = responseData['rajaongkir']['status']['code'];
            if(status == 200){
                this.setState({
                    provinces: responseData['rajaongkir']['results']
                })
            }
        })
    }


    onNavigationDetail = () => {
        Actions.detail()
    }
    render() {
        let provinceItems = <View></View>
        if(this.state.provinces){
            provinceItems = this.state.provinces.map(prov => {
                return(
                    <Picker.Item
                    key={prov.province_id}
                    label={prov.province}
                    value={prov}
                    />
                )
            })
        }
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Cek Ongkos Kirim disini</Title>
                    </Body>
                    {/* <Right /> */}
                </Header>
                <Content padder>
                    <Card>
                        {/* alamat asal */}
                        <CardItem header>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Alamat Asal</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {/* provinsi */}
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}
                                        placeholder="Pilih Provinsi"
                                        placeholderStyle={{
                                            color: 'blue'
                                        }}
                                    >
                                   {provinceItems}
                                    </Picker>
                                </Item>
                                {/* kota */}
                                <Item picker style={{ marginTop: 15 }}>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}
                                        placeholder="Pilih Kota"
                                        placeholderStyle={{
                                            color: 'wheat'
                                        }}
                                    >
                                        <Picker.Item label="Pilih Kota" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>


                    <Card>
                        {/* alamat tujuan */}
                        <CardItem header>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Alamat Tujuan</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                {/* provinsi */}
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}
                                        placeholder="Pilih Provinsi"
                                        placeholderStyle={{
                                            color: 'wheat'
                                        }}
                                    >
                                        <Picker.Item label="Pilih Provinsi" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Item>
                                {/* kota */}
                                <Item picker style={{ marginTop: 15 }}>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}
                                        placeholder="Pilih Kota"
                                        placeholderStyle={{
                                            color: 'wheat'
                                        }}
                                    >
                                        <Picker.Item label="Pilih Kota" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>


                    {/* berat */}
                    <Card>
                        <CardItem header>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Berat Paket</Text>
                        </CardItem>
                        <Body>
                            <Item floatingLabel>
                                <Label>Grams</Label>
                                <Input />
                            </Item>
                        </Body>
                    </Card>

                    {/* kurir */}
                    <Card>
                        <CardItem>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Kurir</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{
                                            width: undefined
                                        }}
                                        placeholder="Pilih Kurir"
                                        placeholderStyle={{
                                            color: 'wheat'
                                        }}
                                    >
                                        <Picker.Item label="JNE" value="jne" />
                                        <Picker.Item label="TIKI" value="tiki" />
                                        <Picker.Item label="POS" value="pos" />

                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <View style={{ justifyContent: 'flex-end', marginBottom: 5 }}>
                    <Button
                        onPress={this.onNavigationDetail}
                        style={{ margin: 10, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Cek Ongkir</Text>
                    </Button>
                </View>
            </Container>
        )
    }
}

export default Home

const styles = StyleSheet.create({})
