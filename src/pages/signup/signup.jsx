import React from 'react';
import './signup.css'
import Button from '../../component/button/button';
import Input from '../../component/formInput/formInput';
import SelectInput from '../../component/formInputSelector/formInputSelector';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="app">
      <div className="white-section">
        <div className="centered-content">
          <img src="/assets/logo-title.png" alt="Logo" className="logo"/>
        </div>
      </div>
      <div className="gradient-section">
      <img
          src="/assets/rugby-petit.svg" 
          alt="Nouveau logo" 
          className="signupGradientLogo"/>
      <div className="signupContent">
          <h1>Créer un compte</h1>
          <p>Lorsque vous créez un compte, vos coordonnées seront traitées conformément à la politique de confidentialité de World Rugby</p>
          <p>Vous avez déjà un compte ? 
            <Link to="/" className="signin">Connexion</Link>
          </p>
          <div className="accountDetail">
            <div className="accountDetailTitle">1. Détails du compte</div>
            <div className="singupButton-wrapper">
              <Button text="Rejoignez-nous Apple" logoSrc="/assets/appleWhiteLogo.svg" className="button" backgroundColor="#000" color="#ffffff"/>
              <Button text="Rejoignez-nous Facebook" logoSrc="/assets/facebookLogo.svg" className="button" backgroundColor="#1877F2" color="#ffffff"/>
              <Button text="Rejoignez-nous Google" logoSrc="/assets/googleLogo.svg" className="button" backgroundColor="#FFF" color="#000"/>
            </div>
            <div className="line-with-text">
              <hr className="line" />
              <span className="text">ou</span>
              <hr className="line" />
            </div>
            <div className="form">
              <Input title="Adresse e-mail *" placeholder="exemple@mail.com" />
              <Input title="Nom du compte *" placeholder="Compte" />
              <Input title="Mot de passe *" placeholder="Mot de passe" />
              <p className="passwordSubtitle">Votre mot de passe doit contenir au moins 8 caractères, dont au moins 1 chiffre, 1 lettre majuscule et 1 lettre minuscule.</p>
              <Input title="Comfirmation du mot de passe" placeholder="Mot de passe" />
            </div>
          </div>
          <div className="contactDetails">
            <div className="contactDetailTitle">2. Vos Coordonnées</div>
            <Input title="Nom *" placeholder="Nom" />
            <Input title="Prénom *" placeholder="Prénom" />
            <Input title="Média *" placeholder="Média" />
            <SelectInput title="Métier" options={['Journaliste', 'Photographe', 'Reporter', 'Cadreur', 'Ingénieur du son', 'Commentateur']}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
