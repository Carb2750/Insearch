import { StyledRegisterOne } from './style';
import React, { useEffect, useState } from "react";


import Input from '../../../Input/index';
import Button from '../../../Button/index';
import Select from '../../../Select/index';


//forloop
const ListDays = [
    { day: '1', value: 1 },
    { day: '2', value: 2 },
    { day: '3', value: 3 },
    { day: '4', value: 4 },
    { day: '5', value: 5 },
    { day: '6', value: 6 },
    { day: '7', value: 7 },
    { day: '8', value: 8 },
    { day: '9', value: 9 },
    { day: '10', value: 10 },
    { day: '11', value: 11 },
    { day: '12', value: 12 },
    { day: '13', value: 13 },
    { day: '14', value: 14 },
    { day: '15', value: 15 },
    { day: '16', value: 16 },
    { day: '17', value: 17 },
    { day: '18', value: 18 },
    { day: '19', value: 19 },
    { day: '20', value: 20 },
    { day: '21', value: 21 },
    { day: '22', value: 22 },
    { day: '23', value: 23 },
    { day: '24', value: 24 },
    { day: '25', value: 25 },
    { day: '26', value: 26 },
    { day: '27', value: 27 },
    { day: '28', value: 28 },
    { day: '29', value: 29 },
    { day: '30', value: 30 },
    { day: '31', value: 31 }
];

const ListMonths = [
    { month: 'Enero', value: 1 },
    { month: 'Febrero', value: 2 },
    { month: 'Marzo', value: 3 },
    { month: 'Abril', value: 4 },
    { month: 'Mayo', value: 5 },
    { month: 'Junio', value: 6 },
    { month: 'Julio', value: 7 },
    { month: 'Agosto', value: 8 },
    { month: 'Septiembre', value: 9 },
    { month: 'Octubre', value: 10 },
    { month: 'Noviembre', value: 11 },
    { month: 'Diciembre', value: 12 }
];

const ListYears = [
    { year : '1930', value : 1 }
];

let days = [];
for (let i=1;i<=31;i++){
    days.push(i);
}



const RegisterOne = () => {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }


    return(
        <StyledRegisterOne>
            <p className="title">Crear Usuario</p>
            <div>
                <Input label="Correo Electronico:" input inputSize={'100%'}/>
                <Input label="Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Confirmar Contraseña:" type="password" input inputSize={'100%'}/>
                <Input label="Usuario:" input inputSize={'100%'} />
                <Input label="Nombre:" input inputSize={'100%'} />
                <Input label="Apellido:" input inputSize={'100%'} />
                <Input label="Fecha Nacimiento" />
                <div className="inline">
                    <Select select selectSize={'90%'}>
                        {ListDays.map(day => {
                            return <option>{day.day}</option>
                        })}
                    </Select>
                    <Select select selectSize={'90%'}>
                        {ListMonths.map(month => {
                                return <option>{month.month}</option>
                            })}
                    </Select>
                    <Select select selectSize={'100%'} />
                </div>
                <div className="custom-input-file">
                    <p className="titles">Agregar Foto</p>
                    <Input type="file" id="upload" onChange={onSelectFile} accept="image/png, .jpeg, .jpg, image/gif" input />
                    <label for="upload" class="square">Seleccionar Imagen</label>
                    {selectedFile &&  <img className="img" src={preview} />}
                    <p className="titles">Agregar CV</p>
                    <label for="pdf" class="square">Seleccionar Archivo PDF</label> 
                    <Input type="file" id="pdf" accept="application/pdf" input />
                </div>
            </div>
            <Button link="/pageCompanyTwo">Siguiente</Button>
        </StyledRegisterOne>
    );
};

export default RegisterOne;