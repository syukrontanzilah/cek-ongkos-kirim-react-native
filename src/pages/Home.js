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
            originCities: [],
            destinationCities: [],
            selectedOriginProvince: null,
            selectedOriginCity: null,
            selectedDestinationProvince: null,
            selectedDestinationCity: null,
            weight: 0,
            courier: null
        }
    }

    componentDidMount() {
        this.onLoadProvince()
    }

    onLoadProvince = () => {
        fetch(URL + '/province', {
            method: 'GET',
            headers: {
                'key': KEY
            }
        }).then((response) => response.json())
            .then((responseData) => {
                let status = responseData['rajaongkir']['status']['code'];
                if (status == 200) {
                    this.setState({
                        provinces: responseData['rajaongkir']['results']
                    })
                }
            })
    }

    onOriginProvinceChange = (val) => {
        this.setState({
            selectedOriginProvince: val
        }, () => {
            fetch(URL + '/city?province=' + this.state.selectedOriginProvince.province_id, {
                method: 'GET',
                headers: {
                    'key': KEY
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    let status = responseData['rajaongkir']['status']['code'];
                    if (status == 200) {
                        this.setState({
                            originCities: responseData['rajaongkir']['results']
                        })
                    }
                })
        })
    }

    onDestinationProvinceChange = (val) => {
        this.setState({
            selectedDestinationProvince: val
        }, () => {
            fetch(URL + '/city?province=' + this.state.selectedDestinationProvince.province_id, {
                method: 'GET',
                headers: {
                    'key': KEY
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    let status = responseData['rajaongkir']['status']['code'];
                    if (status == 200) {
                        this.setState({
                            destinationCities: responseData['rajaongkir']['results']
                        })
                    }
                })
        })
    }

    onOriginCityChange = (val) => {
        this.setState({
            selectedOriginCity: val
        })
    }

    onDestinationCityChange = (val) => {
        this.setState({
            selectedDestinationCity: val
        })
    }


    onNavigationDetail = () => {
        let params = {
            originCities: this.state.selectedOriginCity.city_id,
            destinationCities: this.state.selectedDestinationCity.city_id,
            weight: this.state.weight,
            courier: this.state.courier
        }
        Actions.detail({data:params})
    }
    render() {
        let provinceItems = <View></View>
        let provinceItemDestination = <View></View>
        let originCityItems = <View></View>
        let destinationCitiesItems = <View></View>
        if (this.state.provinces) {
            provinceItems = this.state.provinces.map(prov => {
                return (
                    <Picker.Item
                        key={prov.province_id}
                        label={prov.province}
                        value={prov}
                    />
                )
            })
        }
        if (this.state.provinces) {
            provinceItemDestination = this.state.provinces.map(prov => {
                return (
                    <Picker.Item
                        key={prov.province_id}
                        label={prov.province}
                        value={prov}
                    />
                )
            })
        }

        if (this.state.originCities) {
            originCityItems = this.state.originCities.map(city => {
                return (
                    <Picker.Item
                        key={city.city_id}
                        label={city.city_name}
                        value={city} />
                )
            })
        }
        if (this.state.destinationCities) {
            destinationCitiesItems = this.state.destinationCities.map(city => {
                return (
                    <Picker.Item
                        key={city.city_id}
                        label={city.city_name}
                        value={city} />
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

                                        selectedValue={this.state.selectedOriginProvince}
                                        onValueChange={this.onOriginProvinceChange}>
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
                                        selectedValue={this.state.selectedOriginCity}
                                        onValueChange={this.onOriginCityChange}
                                    >
                                        {originCityItems}

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
                                {/* provinsi tujuan */}
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

                                        selectedValue={this.state.selectedDestinationProvince}
                                        onValueChange={this.onDestinationProvinceChange}>
                                        {provinceItemDestination}
                                    </Picker>
                                </Item>
                                {/* kota tujuan */}
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
                                        selectedValue={this.state.selectedDestinationCity}
                                        onValueChange={this.onDestinationCityChange}
                                    >
                                        {destinationCitiesItems}
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>


                    {/* berat */}
                    <Card>
                        <CardItem header>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Berat Paket (Dalam Gram) </Text>
                        </CardItem>
                        <Body>
                            <Item floatingLabel>
                                <Label>Grams</Label>
                                <Input
                                    onChangeText={(val) => this.setState({ weight: val })}
                                    maxLength={6}
                                    keyboardType='numeric'
                                />
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
                                        selectedValue={this.state.courier}
                                        onValueChange={(val) => this.setState({ courier: val })}
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
