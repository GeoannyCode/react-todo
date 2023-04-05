import React from "react";

function TodoForm(){
    return (
        <form>
            <label>...</label>
            <textarea
                placeholder="¡Vamos, tu lista de tareas te está esperando! "
            />
            <div>
                <button>
                    Cancelar
                </button>
                <button>
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };