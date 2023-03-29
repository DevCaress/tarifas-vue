<script setup>
import Media from "../components/Media.vue";
import InfoServices from "@/components/InfoServices.vue";

const mediaCaress = [
    {
        name: "carresTikTok",
        img: "tiktok",
        followers: "90k",
        engagement: {
            status: true,
            porcent: 7.07,
            }
    },{
        name: "caressInstagram",
        img: "instagram",
        followers: "4.2k",
        engagement: {
            status: true,
            porcent: 2.16,
            }
    },{
        name: "caressFacebook",
        img: "facebook",
        followers: "7.3k",
        engagement: {
            status: true,
            porcent: 0.65,
    },
    },{
        name: "caressTwitch",
        img: "twitch",
        followers: "728",
        engagement: {
            status: true,
            porcent: 0.12,
            },
    },
];

const mediaNogara = [
{
        name:'nogaraYoutube',
        img: 'youtube',
        followers: '2.2k',
        engagement :{
            status:false,
            porcent:0
        }
    },{
        name:'nogaraFacebook',
        img: 'facebook',
        followers:'29.5k',
        engagement :{
            status:false,
            porcent:0
        }
    },{
        name:'nogaraInstagram',
        img: 'instagram',
        followers:'1.4k',
        engagement :{
            status:false,
            porcent:0
        }
    },
]

// console.log(window.screen)
</script>

<template>
  <section class="header-container">
    <img  class="logoCaress" src="../assets/media/caress-logo.jpeg" alt="">
    <div class="container-caress">
      <div>
        <h2>@DevCaress</h2>
        <div class="container-subtitles">
          <span>Followers</span>
          <span>Engagement</span>
        </div>
      </div>
      <div class="container-media-caress">
        <Media
        v-for="media in mediaCaress" 
        :key="media.name"
        :followers="media.followers"
        :img="media.img"
        >
          <span>{{ media.engagement.porcent }}</span>
        </Media>
      </div>
    </div>

    <div class="container-media-nogara">
      <h2>@NogaraDevCode</h2>
      <div class="followers-nogara">
        <Media
        v-for="media in mediaNogara" 
        :key="media.name"
        :followers="media.followers"
        :img="media.img"
        ></Media>
      </div>
    </div>
  </section>

  <section class="container-tarifas">
    <div class="cardOne">

      <InfoServices
      title="Video dedicado"
      info="Hasta 3 mins, hablando específicamente del producto o servicio"
      :cost="75"
      ><p>- Adaptación de un trend al producto o servicio.</p></InfoServices
      >
      <InfoServices
      title="Mención como sponsor"
      info="Mención de hasta 15 segundos en cualquier video"
      :cost="25"
      />
    </div>
    <div class="cardTwo">

      <InfoServices
      title="Stories"
      info="Storie hablando específicamente del producto o servicio"
      :cost="25"
      />
      <InfoServices
      title="Post"
      info="1 solo post del producto o servicio. (El post se sube a stories)"
      :cost="25"
      />
      <InfoServices
      title="Live"
      info="Stream, webinar o cualquier tipo de participación mediante streaming"
      :cost="150"
      />
      <InfoServices
      title="Evento precensial"
      info="Charla, taller, paneles o cualquier participación de forma presencial"
      :cost="200"
      />
    </div>
      <InfoServices
      class="notes"
      title="Notas"
      info="Se pueden crear paquetes especiales si la empresa así lo desea"
      ><p>
        - Los precios pueden variar dependiendo del volumen de contenido.
      </p></InfoServices
      >
      <footer>
        <div>
            <img src="../assets/media/whatsapp.svg" alt="">
            <span>55 2026 4985</span>
        </div>
        <div>
          <img src="../assets/media/envelope-regular.svg" alt="">
            <span>devcaress@gmail.com</span>
        </div>
      </footer>
    </section>

  </template>

<style>

.header-container{
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,11,121,0.8799894957983193) 24%, rgba(0,212,255,1) 100%);
  color: #eceff1;
  font-size: 1.5em;
  display: grid;
  padding-bottom: 50px;
}

.container-caress{
  display: grid;
}
.logoCaress{
  width: 200px;
  height: 200px;
  padding: 50px 25px;
}
div.container-media-caress > div{
  display: flex;
  justify-content: space-around;
}
div.container-subtitles{
  display: flex;
  justify-content: space-around;
}
.followers-nogara{
  margin-top: 90px;
}
.container-tarifas {
  font-size: 25px;
  background-color: #fff;
  display: grid;
  grid-gap: 25px;
}
.cardOne,.cardTwo {
  display: grid;
  padding: 25px;
}

.notes{
  padding: 25px;
}
footer{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: -100px 0 20px 0;
  padding: 25px;
}

footer > div {
  display: flex;
  align-items: center;
}

footer > div > img{
  width: 25px;
  height: 25px;
  align-self: center;
  margin-right: 10px;

}

@media  screen and (min-width: 1282px){
.header-container{
  grid-template-columns: 20% 40% 40%;
}
.container-caress{
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);
}
.container-caress > div{
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
}
.container-caress > div > h2{
  text-align: center;
}

div.container-subtitles{
  width: 500px;
}

div.container-media-caress{
  grid-column: 1/3;
  grid-row: 2/4;
  justify-self:unset;
}


.container-tarifas{
  grid-template-columns: repeat(1,1fr);
  grid-template-rows: 35% 35% 25% 1%;
}

.cardOne,.cardTwo {
  grid-template-columns: repeat(2,1fr);
}

.cardOne{
  grid-template-columns: 100%;
}
}
@media screen and (min-width: 1050px) and (max-width:1281px){
  .header-container{
    grid-template-columns: 20% 40% 40%;
  }
  .container-caress{
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(3,1fr);
  justify-self: end;
}
.container-caress > div{
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
}
.container-caress > div > h2{
  text-align: center;
}

div.container-subtitles > span:nth-child(1){
  margin-right: 25px;

}
div.container-media-caress{
  grid-column: 1/3;
  grid-row: 2/4;
  justify-self:unset;

}

div.container-media-nogara{
  justify-self: end;
  margin-right: 40px;
}


}
@media screen and (min-width: 650px) and (max-width:1049px){
.header-container{
  grid-template-columns:  100%;
  justify-items: center;
}
.container-caress{
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);

}
.container-caress > div{
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
}
.container-caress > div > h2{
  text-align: center;
}

div.container-subtitles > span:nth-child(1){
  margin-right: 25px;

}
div.container-media-caress{
  grid-column: 1/3;
  grid-row: 2/4;
  justify-self:unset;
}
.container-media-nogara{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.followers-nogara{
  margin-top: 0px;
}
footer{
  font-size: 15.5px;
}
}
@media screen  and (min-width: 100px) and (max-width:649px){
.header-container{
  grid-template-columns:  100%;
  justify-items: center;
}
.container-caress{
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(3,1fr);

}
.container-caress > div{
  grid-column: 1/3;
  justify-self: center;
  align-self: center;
}
.container-caress > div > h2{
  text-align: center;
}

.logoCaress{
  width: 150px;
  height: 150px;
}

div.container-subtitles > span:nth-child(1){
  margin-right: 25px;

}
div.container-media-caress{
  grid-column: 1/3;
  grid-row: 2/4;
  justify-self:unset;
}
.container-media-nogara{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.followers-nogara{
  margin-top: 0px;
}
footer{
  display: flex;
  flex-direction: column;
  font-size: 25px;
}
}

</style>
