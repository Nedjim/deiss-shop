import React from 'react';

export default class Auth extends React.Component {
    render(){
        console.log('authentication')
        return( 
            <div>
                <h1>Authentification</h1>
                <form method="post" action='/auth'>
                    <input type='text' name='pseudo' placeholder='Pseudo' />
                    <input type='password' name='password' placeholder='Mot de passe' />
                    <button type='submit'>S'identifier</button>
                </form>
            </div>
        )
    }
}