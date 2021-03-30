import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    body{
        background-image: linear-gradient(to right, lightgray, rgba(99, 62, 62, 0.637),rgba(68, 66, 66, 0.89));
        font-family: sans-serif;
        color:rgb(30, 30, 30);
        padding: 0;
        margin: 0;
    }

    header{
        padding: 40px 80px 40px 80px;
    }

    input{
        border-radius: 20px;
    }

    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li{
    float: left;
    }

    li a{
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    header, .grid-container{
        margin: 0px 50px 0px 50px;
    }

    header h1{
        font-size: 47px;
        text-align: center;
    }

    .fixed-top {
        height: 60px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        overflow: hidden;
        background-color: rgb(73, 6, 6);
    }

    .fixed-top .logo {
        max-width: 250px;
        padding: 0 10px;
        overflow: hidden;
    }
    .fixed-top .logo a{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 60px;
    }

    #logo_img{
        max-width: 100%;
        max-height: 60px;
    }

    .fixed-top a{
        color: white;
    }

    .fixed-top h3{
        color: white;
    }

    .grid-container {
    display: grid;
    grid-template-columns: auto auto ;
    padding: 10px;
    font-size: 25px;
    }

    .grid-item {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }

    .container{
        padding: 100px 200px 200px 100px;
        margin: 50px ;
        background-color: rgb(130, 130, 130);
        border-radius: 20px;
        height: 0px;
        width: 60px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        box-shadow: 5px 10px rgb(115, 115,115);
    }

    .cad{
        padding: 50px 100px 100px 50px;
        margin: 0px ;
        background-color: rgb(130, 130, 130);
        border-radius: 20px;
        height: 290px;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        box-shadow: 5px 10px rgb(115, 115,115);
    }
    #pessoa{
        max-width: 50%;
        max-height: 60px;
    }

    @media only screen and (max-width: 460px){
        header{  
            padding: 20px 40px 20px 40px;
            margin: 0px 20px 0px 20px;
        }
        header h1{
            font-size: 23px;
        }
        .grid-container{
            grid-template-columns: auto;
        }
        .imagem_menu{
            width: 70%;
            height: 70%;
        }
        .imagem_menu2{
            width: 60%;
            height: 60%;
        }
        .container{
            padding: 0px 150px 150px 50px;
            margin: 50px ;
            height: 0px;
            width: 60px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
        }
        .cad{
            padding: 15px 150px 150px 50px;
            margin: 50px ;
            height: 380px;
            width: 60px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
        }
    }
    @media only screen and (max-width: 890px){
        header{  
            padding: 20px 40px 20px 40px;
            margin: 0px 20px 0px 20px;
        }
        header h1{
            font-size: 23px;
        }
        .grid-container{
            grid-template-columns: auto;
        }
        .imagem_menu{
            width: 70%;
            height: 70%;
        }
        .imagem_menu2{
            width: 55%;
            height: 55%;
        }

}` 