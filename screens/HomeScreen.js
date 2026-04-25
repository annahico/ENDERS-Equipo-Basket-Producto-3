import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function HomeScreen({navigation}){
    return (
        <ScrollView contentContainerStyle={styles.page}>
            <Header navigation={navigation}/>
            <View style={styles.hero}>
                <Image source={require('../assets/images/portada1.png')} style={styles.heroImage}/>
            </View>
            <Text style={styles.title}>
                <Text style={styles.titleHighlight}>ENDERS</Text>
                {'\n'}TEAM{'\n'}BASKET
            </Text>
            <View style={styles.footer}>
                <Image source={require('../assets/logos/logo_uoc.png')} style={styles.uocLogo} resizeMode="contain"/>
                <Text style={styles.footerTitle}>Universitat Oberta de Catalunya</Text>
                <Text style={styles.footerText}>Desarrollo Front-End con Frameworks avanzados en entornos móviles</Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    page: {
        flexGrow: 1,
        backgroundColor: '#EDF2F4',
    },
    hero: {
        minHeight: 520,
        backgroundColor: '#D90429',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: 70,
        paddingBottom: 60,
    },
    heroImage: {
        width: 270,
        height: 270,
        borderRadius: 135,
        marginBottom: 38,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    title: {
        color: '#EDF2F4',
        fontSize: 38,
        fontWeight: '900',
        textAlign: 'center',
        lineHeight: 42,
        textShadowColor: 'rgba(255,255,255,0.65)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 18,
    },
    titleHighlight: {
        color: '#c7cbd4',
    },
    footer: {
        minHeight: 280,
        backgroundColor: '#EDF2F4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 28,
        paddingVertical: 40,
    },
    uocLogo: {
        width: 105,
        height: 105,
        marginBottom: 14,
    },
    footerTitle: {
        color: '#2B2D42',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
    },
    footerText: {
        color: 'rgba(43,45,66,0.65)',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 18,
    },
});