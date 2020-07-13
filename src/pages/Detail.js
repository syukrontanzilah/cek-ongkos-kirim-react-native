import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Content } from 'native-base'

class Detail extends Component {
    render() {
        return (
            <Container>
            <Header>
                <Left />
                <Body>
                    <Title>Detail</Title>
                    <Subtitle>Cek detail disini</Subtitle>
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