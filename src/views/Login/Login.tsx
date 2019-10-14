import React from 'react';
import MainApp from '../MainApp/MainApp';

class Login extends React.Component<any, any> {

    loggedIn = () => {
            return (
                <MainApp />
            )
    }

    render() {
        return (
            <body>
                <div >
                    <div >
                        <div>
                            <div >
                                <div>
                                    {/* <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" alt="Logo" /> */}
                            </div>
                                </div>
                                <div >
                                    <form>
                                        <div >
                                            <div >
                                                <span ><i ></i></span>
                                            </div>
                                            <input type="text" name="" value="" placeholder="username" />
                                        </div>
                                            <div >
                                                <div >
                                                    <span ><i ></i></span>
                                                </div>
                                                <input type="password" name=""  value="" placeholder="password" />
                                            </div>
                                                <div >
                                                    <div >
                                                        <input type="checkbox"  id="customControlInline" />
                                                            <label >Remember me</label>
                                                         </div>
                                                    </div>
                                            </form>
                                            </div>
                                            <div >
                                                <button type="button" name="button" onSubmit={this.loggedIn}>Login</button>
                                            </div>
                                            <div >
                                                <div >
                                                    Don't have an account? <a href="#">Sign Up</a>
                                                </div>
                                                <div >
                                                    <a href="#">Forgot your password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </body>
                            );
                        }
                    }
                    
export default Login;