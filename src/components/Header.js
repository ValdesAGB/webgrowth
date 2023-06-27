import React from 'react'
import styled from 'styled-components'
import { navigationElements, rdv } from '../data'
import logo from '../assets/logo.png'

function Header() {
  /*const handleAnchorClick = (event, anchorId) => {
    event.preventDefault()
    const anchorElement = document.getElementById(anchorId)
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth' })
    }
  }*/

  const Navigation = styled.section`
    background-color: #121234;
    font-family: 'Roboto', sans-serif;
    color: white;
    position: sticky;
    top: 0;
    z-index: 3;
    @media (min-width: 320px) {
      padding: 8% 0 8% 0;
      margin-bottom: 3%;
    }

    @media (min-width: 425px) {
      padding: 5% 0 5% 0;
      margin-bottom: 2%;
    }
    @media (min-width: 768px) {
      padding: 3% 0 3% 0;
      margin-bottom: 1%;
    }
    @media (min-width: 1360px) {
      padding: 2% 0 2% 0;
      margin-bottom: 1%;
    }

    @media (min-width: 1360px) {
      margin-bottom: 0%;
    }
  `

  const BrandLink = styled.a``

  const Brand = styled.img`
    width: 100%;
  `
  const Icone = styled.i`
    color: white;
    @media (min-width: 320px) {
      font-size: 2.5em;
    }
    @media (min-width: 375px) {
      font-size: 3em;
    }
  `

  const ListItems = styled.li`
    color: white;
  `

  const ListItemsLink = styled.a`
    color: ${(props) => (props.ids !== 'acceuil' ? 'white' : '#ffce07')};
    &:hover {
      color: #ffce07;
    }

    &:focus {
      color: #ffce07;
    }
  `
  const CallDiv = styled.div`
    @media (min-width: 320px) {
      margin-left: 0.25%;
    }
    @media (min-width: 768px) {
      margin-left: 0%;
    }
  `

  const Call = styled.a`
    color: #121234;
    background-color: #ffce07;
    border: none;
    text-decoration: none;

    border-radius: 5px;
    &:hover {
      background-color: #ffce07;
    }
    &:active {
      background-color: #ffce07;
    }
    font-weight: 500;

    @media (min-width: 320px) {
      padding: 3%;
    }

    @media (min-width: 768px) {
      padding: 1%;
      margin-left: 0%;
    }

    @media (min-width: 1024px) {
      margin-left: 0%;
    }
  `

  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container">
            <nav className="row navbar navbar-expand-lg">
              <div className="container-fluid">
                <BrandLink
                  className="navbar-brand col-8 col-md-5 col-lg-3 "
                  href="#"
                >
                  <Brand src={logo} alt="webgrowth-logo" className="" />
                </BrandLink>

                <Icone
                  className="navbar-toggler bi bi-list"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                />

                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 col-md-8 offset-lg-1 col-xl-7 col-xxl-6  ">
                    {navigationElements.map(({ id, title, href }) => (
                      <ListItems className="nav-item" key={id}>
                        <ListItemsLink
                          ids={id}
                          className={`nav-link ${id}`}
                          href={href}
                          /* onClick={(event) => handleAnchorClick(event, id)}*/
                        >
                          {title}
                        </ListItemsLink>
                      </ListItems>
                    ))}
                  </ul>

                  <CallDiv className="col-md col-lg-3  row justify-content-lg-center ">
                    <Call
                      className="col-8 col-md-4 col-lg-12 text-center"
                      href={rdv}
                      target="_blank"
                    >
                      Planifier un appel
                    </Call>
                  </CallDiv>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Navigation>
    </React.Fragment>
  )
}

export default Header
