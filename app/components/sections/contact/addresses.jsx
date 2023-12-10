import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Addresses() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-8  p-7  text-center">
            <div className="flex gap-5 ">
                      <FontAwesomeIcon className="text-2xl my-1" icon={faCheckCircle}/>
                        <span>
                                <h4 className="text-black text-xl mb-3">PARIS STORE</h4>
                                <p className="text-sm text-gray-500">
                                86 rue de Raymond Poincaré, Paris
                                Monday to Friday: 9am to 8pm depot@qodeinteractive.com
                                </p>
                        </span>
                        
            </div>

            <div className="flex gap-5">
                      <FontAwesomeIcon className="text-2xl my-1" icon={faCheckCircle}/>
                        <span>
                                <h4 className="text-black text-xl mb-3">BERLIN  STORE</h4>
                                <p className="text-sm text-gray-500">
                                Plaza de la Fuensanta 13, Móstoles, Madrid
                                Monday to Friday: 9am to 8pm
                                depot@qodeinteractive.com
                                </p>
                        </span>
                        
            </div>

            <div className="flex gap-5">
                      <FontAwesomeIcon className="text-2xl my-1" icon={faCheckCircle}/>
                        <span>
                                <h4 className="text-black text-xl mb-3">MADRID  STORE</h4>
                                <p className="text-sm text-gray-500">
                                Friedrichstrasse 18, Innenstadt, Berlin
                                Monday to Friday: 9am to 8pm
                                depot@qodeinteractive.com
                                </p>
                        </span>
                        
            </div>
    </div>
  )
}

export default Addresses