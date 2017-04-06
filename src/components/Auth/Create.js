import React from 'react';

export default class Create extends React.Component {
    render(){
        return( 
            <div>
                <h1>Créer un compte</h1>

                <form method="post" action='/create'>
                    <input type='text' placeholder='Pseudo' name='pseudo' />
                    <input type='email' placeholder='E-mail' name='email' />
                    <input type='password' placeholder='Mot de passe' name='password' />
                    <input type='password' placeholder='Confirmer le mot de passe' name='password' />
                    <button type='submit'>S'identifier</button>
                </form>
            </div>
        )
    }
}