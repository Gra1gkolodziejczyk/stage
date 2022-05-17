import React, {useState, useEffect, useRef, useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header1 from '../Header/Header1';
import axios from "../api/axios";

const LOGIN_URL = '/api/authenticate';

// Import Images
import WrapperContent, {
  Title,
  Subtitle,
  WrapperInput,
  WrapperButton,
  Button,
  Text,
} from "./Offreur_de_competence.style";

const Demandeur_competence = () => {

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({user, pwd}),
          {
            headers: { 'Content-Type' : 'application/json'},
            withCredentials: true
          }
        );
        console.log(JSON.stringify(response?.data));
        // console.log(JSON.stringify(response));
        const accessToken = response?.data.accessToken;
        const roles = response?.data.roles;
        setAuth({ user, pwd, roles ,accessToken });
        setUser('');
        setPwd('');
        setSuccess(true);
      } catch(err) {
        if(!err?.response) {
          setErrMsg('No Server Response');
        } else if(err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } else if(err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
    }
  }

  return (
    <>
      <Header1 />
      <WrapperContent>
        <form onSubmit={handleSubmit}>
          <Title>Pseudo</Title>
          <WrapperInput>
            <input 
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
          </WrapperInput>
          <Title>Mot de passe</Title>
          <WrapperInput>
            <input 
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
          </WrapperInput>
          <Subtitle>
            Pas encore de compte ?
            <Link href="/Register/Demandeur_competence">
              <a>Inscrivez-vous</a>
            </Link>
          </Subtitle>

          <WrapperButton>
            <Button>
              <Link href="/">
                <a>
                  <Text>Changer de mot de passe</Text>
                </a>
              </Link>
            </Button>
            <Button onClick={() => {handleSubmit()}}>
              <Link href="/OffreurDeCompetence/Conseil">
                <a>
                  <Text>Connexion</Text>
                </a>
              </Link>
            </Button>
          </WrapperButton>
        </form>
      </WrapperContent>
      <Footer />
    </>
  );
};

export default Demandeur_competence;
