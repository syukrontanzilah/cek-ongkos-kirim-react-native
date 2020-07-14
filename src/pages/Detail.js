import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Button, Icon, List, ListItem, Thumbnail } from 'native-base'
import { Actions } from 'react-native-router-flux'
import { URL, KEY } from '../utils/Const';
import NumberFormat from 'react-number-format';

const LOGO = {
    'jne': "https://kutakhabispikir.files.wordpress.com/2016/06/jne.jpg?w=1008",
    'tiki': "https://3.bp.blogspot.com/-nMmi2PtYglU/VuYpctwEyjI/AAAAAAAACEc/fH54ZbnkEPc6ynt7xscPtGs01Prv9UFeg/s1600/tiki.png",
    'pos': "https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/logo-pos-indonesia.jpg"
}

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.cekOngkosKirim()
    }

    cekOngkosKirim = () => {
        let params = this.props.data;
        const formData = new URLSearchParams();
        formData.append('origin', params.originCities);
        formData.append('destination', params.destinationCities);
        formData.append('weight', params.weight);
        formData.append('courier', params.courier);

        fetch(URL + '/cost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'key': KEY
            },
            body: formData.toString()
        }).then((response) => response.json())
            .then((responseData) => {
                let status = responseData['rajaongkir']['status']['code'];
                if (status === 200) {
                    this.setState({
                        results: responseData['rajaongkir']['results'][0]['costs']
                    })
                }
            })
    }

    render() {
        let costItem = <View></View>
        if (this.state.results) {
            costItem = this.state.results.map(item => {
                return (
                    <ListItem
                        thumbnail
                        key={new Date().getMilliseconds + Math.random()}>
                        <Left>
                            <Thumbnail source={{ uri: LOGO[this.props.data.courier] }} />
                        </Left>
                        <Body>
                            <Text>{item.service}</Text>
                            <Text note>{item.description}</Text>
                            <Text>{item.cost[0].etd}</Text>
                        </Body>
                        <Right>
                            <NumberFormat
                                value={item.cost[0].value}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'Rp. '}
                                renderText={value => <Text>{value}</Text>} />
                        </Right>
                    </ListItem>
                )
            })
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => Actions.pop()}>
                            <Icon
                                type='Entypo' name='chevron-small-left'
                                style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: 10 }}>
                        <Title>Detail Ongkir</Title>
                        <Subtitle>Detail Ongkos Kirim</Subtitle>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        {costItem}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Detail

const styles = StyleSheet.create({})