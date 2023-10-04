/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Button, Spinner } from 'reactstrap';
import * as XLSX from 'xlsx';
import PropTypes from 'prop-types';

const BotonExcelEstilizado = (props) => {
  const { titleDocument, title, moreInformation, longSize, table } = props;

  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      marca: 'marca 1',
      categoria: 'Categoría 1',
      cantidad: 10,
      precio: 19.99,
      valoracion: 4.5,
    },
    {
      id: 2,
      nombre: 'Producto 2',
      marca: 'marca 2',
      categoria: 'Categoría 2',
      cantidad: 15,
      precio: 29.99,
      valoracion: 3.8,
    },
    {
      id: 3,
      nombre: 'Producto 3',
      marca: 'marca 3',
      categoria: 'Categoría 1',
      cantidad: 8,
      precio: 14.99,
      valoracion: 4.0,
    },
    {
      id: 4,
      nombre: 'Producto 4',
      marca: 'marca 2',
      categoria: 'Categoría 3',
      cantidad: 20,
      precio: 39.99,
      valoracion: 4.7,
    },
    {
      id: 5,
      nombre: 'Producto 5',
      marca: 'marca 3',
      categoria: 'Categoría 2',
      cantidad: 12,
      precio: 24.99,
      valoracion: 4.2,
    },
    {
      id: 6,
      nombre: 'Producto 6',
      marca: 'marca 1',
      categoria: 'Categoría 3',
      cantidad: 7,
      precio: 34.99,
      valoracion: 4.6,
    },
    {
      id: 7,
      nombre: 'Producto 7',
      marca: 'marca 2',
      categoria: 'Categoría 1',
      cantidad: 18,
      precio: 19.99,
      valoracion: 3.5,
    },
    {
      id: 8,
      nombre: 'Producto 8',
      marca: 'marca 1',
      categoria: 'Categoría 2',
      cantidad: 9,
      precio: 29.99,
      valoracion: 4.1,
    },
    {
      id: 9,
      nombre: 'Producto 9',
      marca: 'marca 3',
      categoria: 'Categoría 3',
      cantidad: 14,
      precio: 44.99,
      valoracion: 4.8,
    },
    {
      id: 10,
      nombre: 'Producto 10',
      marca: 'marca 2',
      categoria: 'Categoría 2',
      cantidad: 6,
      precio: 34.99,
      valoracion: 3.9,
    },
    {
      id: 11,
      nombre: 'Producto 11',
      marca: 'marca 1',
      categoria: 'Categoría 1',
      cantidad: 11,
      precio: 19.99,
      valoracion: 4.4,
    },
    {
      id: 12,
      nombre: 'Producto 12',
      marca: 'marca 2',
      categoria: 'Categoría 3',
      cantidad: 22,
      precio: 49.99,
      valoracion: 4.9,
    },
    {
      id: 13,
      nombre: 'Producto 13',
      marca: 'marca 3',
      categoria: 'Categoría 2',
      cantidad: 13,
      precio: 29.99,
      valoracion: 4.3,
    },
    {
      id: 14,
      nombre: 'Producto 14',
      marca: 'marca 1',
      categoria: 'Categoría 1',
      cantidad: 16,
      precio: 19.99,
      valoracion: 3.7,
    },
    {
      id: 15,
      nombre: 'Producto 15',
      marca: 'marca 2',
      categoria: 'Categoría 2',
      cantidad: 5,
      precio: 39.99,
      valoracion: 4.6,
    },
    {
      id: 16,
      nombre: 'Producto 16',
      marca: 'marca 3',
      categoria: 'Categoría 3',
      cantidad: 10,
      precio: 29.99,
      valoracion: 3.8,
    },
    {
      id: 17,
      nombre: 'Producto 17',
      marca: 'marca 2',
      categoria: 'Categoría 1',
      cantidad: 8,
      precio: 19.99,
      valoracion: 4.2,
    },
    {
      id: 18,
      nombre: 'Producto 18',
      marca: 'marca 1',
      categoria: 'Categoría 3',
      cantidad: 17,
      precio: 49.99,
      valoracion: 4.7,
    },
    {
      id: 19,
      nombre: 'Producto 19',
      marca: 'marca 3',
      categoria: 'Categoría 2',
      cantidad: 12,
      precio: 29.99,
      valoracion: 4.0,
    },
    {
      id: 20,
      nombre: 'Producto 20',
      marca: 'marca 2',
      categoria: 'Categoría 1',
      cantidad: 9,
      precio: 24.99,
      valoracion: 3.5,
    },
    // Agrega los 10 objetos restantes con valores similares
  ];

  const [loading, setLoading] = useState(false);

  const titulo = [{ A: 'Reporte de Productos' }, {}];

  const informacionAdicional = {
    A: 'Creado por: iTana el Martes, 04 de Abril del 2023',
  };

  const longitudes = [5, 35, 25, 20, 10, 10, 10, 10, 10, 10];

  const creandoArchivo = (dataFinal) => {
    const libro = XLSX.utils.book_new();

    const hoja = XLSX.utils.json_to_sheet(dataFinal, { skipHeader: true });

    hoja['!merges'] = [
      XLSX.utils.decode_range('A1:G1'),
      XLSX.utils.decode_range('A2:G2'),
      XLSX.utils.decode_range('A34:G34'),
    ];

    const propiedades = [];

    // longitudes.forEach((col) => {
    //   propiedades.push({
    // width: col,
    //   });
    // });
    longSize.forEach((col) => {
      propiedades.push({
        width: col,
      });
    });

    hoja['!cols'] = propiedades;

    XLSX.utils.book_append_sheet(libro, hoja, 'Productos');

    // XLSX.writeFile(libro, 'ProductosEstilizado.xlsx');
    XLSX.writeFile(libro, `${titleDocument}.xlsx`);
  };

  const handleDownload = () => {
    setLoading(true);

    const tabla = [
      {
        A: 'Id',
        B: 'nombre',
        C: 'marca',
        D: 'categoria',
        E: 'cantidad',
        F: 'precio',
        G: 'Valoracion',
      },
    ];

    productos.forEach((producto) => {
      tabla.push({
        A: producto.id,
        B: producto.nombre,
        C: producto.marca,
        D: producto.categoria,
        E: producto.cantidad,
        F: producto.precio,
        G: producto.valoracion,
      });
    });

    // const dataFinal = [...titulo, ...tabla, informacionAdicional];
    const dataFinal = [...title, ...table, moreInformation];

    setTimeout(() => {
      creandoArchivo(dataFinal);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {!loading ? (
        <Button color="success" onClick={handleDownload}>
          Excel Estilizado
        </Button>
      ) : (
        <Button color="success" disabled>
          <Spinner size="sm">Loading...</Spinner>
          <span> Generando...</span>
        </Button>
      )}
    </>
  );
};

BotonExcelEstilizado.propTypes = {
  titleDocument: PropTypes.string,
  title: PropTypes.array,
  moreInformation: PropTypes.object,
  table: PropTypes.array,
  longSize: PropTypes.array,
};

BotonExcelEstilizado.defaultProps = {
  titleDocument: 'converted',
  title: [],
  moreInformation: {},
  table: [],
  longSize: [5, 35, 25, 20, 10, 10, 10],
};

export default BotonExcelEstilizado;
