'use client';


function LogOutPage() {
  return (
    <div>
        <button onClick={async () => {
            await fetch('/api/logout', {
                method: 'POST', });
            window.location.href = "/";
        }}>Logout</button>
      
    </div>
  )
}

export default LogOutPage
