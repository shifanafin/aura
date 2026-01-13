'use client'

export default function LoginPage() {


    async function handleLogin() {
        await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'user@test.com',
                password: '123456'
            })
        })
         window.location.href = "/cart";
    }

  return (
    <div>       
        <h1>Login Page</h1>
        <form method="post" action="/api/login">

            <div>   
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}
