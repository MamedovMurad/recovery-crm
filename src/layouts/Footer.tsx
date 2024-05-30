
const Footer = () => {
  return (
    <footer className="footer h-16 flex items-center px-6 bg-white shadow dark:bg-gray-800">
      <div className="flex md:justify-between justify-center w-full gap-4">
        <div>
          {new Date().getFullYear()} © CRM - <a href="https://recovery.az" target="_blank" rel="noreferrer">RECOVERY.AZ</a>
        </div>
 
      </div>
    </footer>
  )
}

export default Footer