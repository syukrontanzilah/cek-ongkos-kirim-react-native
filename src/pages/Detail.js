import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Button, Icon, List, ListItem, Thumbnail } from 'native-base'
import { Actions } from 'react-native-router-flux'

const JNE = { uri: "https://kutakhabispikir.files.wordpress.com/2016/06/jne.jpg?w=1008" }
const TIKI = { uri: "https://3.bp.blogspot.com/-nMmi2PtYglU/VuYpctwEyjI/AAAAAAAACEc/fH54ZbnkEPc6ynt7xscPtGs01Prv9UFeg/s1600/tiki.png" }
const POS = { uri: "https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/logo-pos-indonesia.jpg" }

class Detail extends Component {
    render() {
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
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={TIKI} />
                            </Left>
                            <Body>
                                <Text>YES</Text>
                                <Text note>1 harisampai</Text>
                            </Body>
                            <Right>
                                <Text note>Rp.20.000</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Detail

const styles = StyleSheet.create({})