import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                            <Footer.Column>
                                <Footer.Title> A propos</Footer.Title>
                                <Footer.Link href="#">Histoire</Footer.Link>
                                <Footer.Link href="#">Clients</Footer.Link>
                                <Footer.Link href="#">Témoignages</Footer.Link>
                            </Footer.Column>

                            <Footer.Column>
                                <Footer.Title> Nos services </Footer.Title>
                                <Footer.Link href="#">Marketing</Footer.Link>
                                <Footer.Link href="#">Consulting</Footer.Link>
                                <Footer.Link href="#">Développement</Footer.Link>
                                <Footer.Link href="#">Design</Footer.Link>
                            </Footer.Column>

                            <Footer.Column>
                                <Footer.Title>Nous contacter</Footer.Title>
                                <Footer.Link href="#">France</Footer.Link>
                                <Footer.Link href="#">Royaume-Uni</Footer.Link>
                                <Footer.Link href="#">Australie</Footer.Link>
                                <Footer.Link href="#">Support Technique</Footer.Link>
                            </Footer.Column>

                            <Footer.Column>
                                <Footer.Title>Réseaux Sociaux</Footer.Title>
                                <Footer.Link href="#"><Icon className="fab fa-facebook-f"/> Facebook</Footer.Link>
                                <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
                                <Footer.Link href="#"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                            </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>
        
    )
}