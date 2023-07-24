import React from 'react'
import styled from 'styled-components'
import { navigationElements, rdv } from '../data'
import logo from '../assets/logo.png'
import { colors } from '../untils/colors'
import { polices } from '../untils/polices'

const Navigation = styled.section`
  background-color: ${colors.main};
  font-family: ${polices.second};
  color: white;
  position: sticky;
  top: 0;
  z-index: 3;

  padding-top: 8%;
  padding-bottom: 8%;

  @media (min-width: 576px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }

  @media (min-width: 768px) {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  @media (min-width: 1200px) {
    padding-top: 2%;
    padding-bottom: 2%;
  }
`

const Brand = styled.img`
  width: 100%;
`

const Icone = styled.i`
  color: white;

  font-size: 2.5em;

  @media (min-width: 576px) {
    font-size: 3em;
  }
`

const List = styled.ul`
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 992px) {
    margin-left: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const ListItems = styled.li`
  color: white;
`

const ListItemsLink = styled.a`
  color: ${(props) => (props.ids !== 'accueil' ? 'white' : colors.second)};
  &:hover {
    color: ${colors.second};
  }

  &:focus {
    color: ${colors.second};
  }
`

const Call = styled.a`
  color: ${colors.main};
  border: none;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  font-weight: 500;

  background-color: ${colors.second};
  &:hover {
    background-color: ${colors.second};
  }
  &:focus {
    background-color: ${colors.second};
  }

  padding: 3%;

  @media (min-width: 768px) {
    padding: 2%;
  }

  @media (min-width: 992px) {
    padding: 4%;
  }

  @media (min-width: 1200px) {
    padding: 5%;
  }

  @media (min-width: 1400px) {
    padding: 3%;
  }
`

function Header() {
  return (
    <React.Fragment>
      <Navigation className="row">
        <div>
          <div className="container">
            <nav className="row navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand col-8 col-md-5 col-lg-3 " href="/">
                  <Brand src={logo} alt="webgrowth-logo" />
                </a>

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
                  <List className="navbar-nav col-md-8 offset-lg-1 col-xl-7 col-xxl-6">
                    {navigationElements.map(({ id, title, href }) => (
                      <ListItems className="nav-item" key={id}>
                        <ListItemsLink
                          ids={id}
                          className={`nav-link ${id}`}
                          href={href}
                        >
                          {title}
                        </ListItemsLink>
                      </ListItems>
                    ))}
                  </List>

                  <div className="col-md col-lg-3">
                    <div className="row justify-content-center">
                      <Call
                        className="col-11 col-xl-10"
                        href={rdv}
                        target="_blank"
                      >
                        Planifier un appel
                      </Call>
                    </div>
                  </div>
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
