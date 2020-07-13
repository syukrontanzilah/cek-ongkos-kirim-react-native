import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Content, Button, Icon } from 'native-base'

class Detail extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button>
                            <Icon
                                type='Entypo' name='chevron-small-left'
                                style={{ color: 'white'}} />
                        </Button>
                    </Left>
                    <Body style={{marginLeft:10}}>
                        <Title>Detail Ongkir</Title>
                        <Subtitle>Cek Detail Ongkos Kirim disini</Subtitle>
                    </Body>
                    <Right />
                </Header>
                <Content>

                </Content>
            </Container>
        )
    }
}

export default Detail

const styles = StyleSheet.create({})