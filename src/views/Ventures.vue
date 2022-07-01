<template>
  <div class="container">
    <div class="header">
      <div class="header__menu">
        <HeaderPart />
      </div>
<!--      <img src="../assets/images/ventures/header-bg.png"/>-->
      <div class="content">
        <p class="p">
                <span class="brave">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2F5BD8" class="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                  </svg>DUXGROUP VENTURES
                </span>
          We invest in <br /> <span class="blue">the future of<br> iGaming</span>
        </p>
      </div>
    </div>
    <div class="investment">
      <div class="title">

        <img src="../assets/images/ventures/investment/title.svg" />
        <img src="../assets/images/ventures/investment/title320.svg" class="small-header"/>
      </div>
      <div class="content">
        <p><span class="blue">DUXGROUP VENTURES</span> IS A VENTURE CAPITAL FUND THAT INVESTS <span class="blue">€1-5 MILLION</span> IN IGAMING PROJECTS IN LINE WITH A <span class="blue">WIN-WIN MODEL</span> </p>
        <div class="imgs">
          <img src="../assets/images/ventures/investment/euro-big.png" />
          <img src="../assets/images/ventures/investment/dive-small.png" />
          <img src="../assets/images/ventures/investment/euro-middle.png" />
          <img src="../assets/images/ventures/investment/euro-small.png" />
          <img src="../assets/images/ventures/investment/Union.png" />
        </div>
      </div>
    </div>
    <div class="principes">
      <div class="title">
        <img src="../assets/images/ventures/principes/header.svg" />
        <img src="../assets/images/ventures/principes/header320.svg" class="small-header" />
      </div>
      <div class="items">
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/3.png" />
            <p>1 + 1 = 3</p>
          </div>
          <div class="text">
            <p>The principle of synergy will help your business develop geometrically.</p>
          </div>
        </div>
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/2.png" />
            <p>A Strong Team</p>
          </div>
          <div class="text">
            <p>We have combined the best experts in the field of marketing, product, and operations in the online gambling sector.</p>
          </div>
        </div>
        <div class="item">
          <div class="item__title">
            <img src="../assets/images/ventures/principes/1.png" />
            <p>iGaming Network</p>
          </div>
          <div class="text">
            <p>We have been working in the market for more than 8 years and can introduce you to all the right people.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="invest">
      <div class="title">
        <img src="../assets/images/ventures/invest/header.svg" />
        <img src="../assets/images/ventures/invest/header320.svg" class="small-header"/>
      </div>

      <div class="list__title__mob">
        <p>There are more than <span class="blue">350 professionals</span> in our team</p>
      </div>
      <div class="description">
        <div class="list">
          <div class="list__title">
            <p>There are more than <span class="blue">350 professionals</span> in our team</p>
          </div>
          <div class="items">
            <ul>
              <li>Developers,</li>
              <li>BI analyticians,</li>
              <li>Marketologists,</li>
              <li>Designers,</li>
              <li>lawyers,</li>
              <li>financiers,</li>
              <li>And many more.</li>
            </ul>
          </div>
        </div>
        <div class="img">
          <img src="../assets/images/ventures/invest/image.png" />
        </div>
      </div>
      <div class="advert">
        <p>WE ARE A <span class="blue">STRONG TEAM</span> THAT HAS BEEN WORKING IN IGAMING FOR MORE THAN <span class="blue">8 YEARS.</span>
          WHEN WE INVEST, <span class="blue">WE NOT ONLY INVEST MONEY,</span> BUT ALL THE EXPERTISE WE HAVE GATHERED DURING OUR OWN BUSINESS ADVENTURE.
          WE CAN OFFER ALL OUR <span class="blue">INVALUABLE KNOWLEDGE AND EXPERIENCE,</span> WHICH WE CALL <span class="blue"> SMART MONEY.</span>
          WE CAN HELP YOU <span class="blue">ENTER THE IGAMING MARKET</span> AND SAVE TIME.</p>
      </div>
    </div>
    <div class="introduce">
      <div class="title">
        <img src="../assets/images/ventures/introduce/header.svg" />
        <img src="../assets/images/ventures/introduce/header320.svg" class="small-header"/>
      </div>
      <div class="content">
        <div class="request">
          <p>Please <span class="blue">tell us</span> the following about <span class="blue">your business:</span></p>
        </div>
        <div class="list">
          <ul>
            <li><span>Please write your name and your company name.</span></li>
            <li><span>Tell us your position within the company.</span></li>
            <li><span>What does your company do? What is its main idea?</span></li>
            <li><span>What are the advantages of your business? How can it compete on the market?</span></li>
            <li><span>How do you think we can help your company? What do you want from our collaboration?</span></li>
            <li><span>Please leave your request in our contact form. These questions will help us get acquainted and find common ground.</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="title">
        <p>Have a <span class="blue">cool idea</span> and want to conquer the <span class="blue">iGaming market?</span>
          Then write to us and we'll figure out how to make a <span class="blue">great product together.</span></p>
      </div>
      <div class="form">
        <input type="email" placeholder="You contact e-mail">
        <textarea placeholder="Comment"></textarea>
        <p>apply now</p>
      </div>
    </div>
    <div class="footer">
      <FooterPart />

    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer";
export default {
  name: "Ventures-page",
  components: {FooterPart, HeaderPart},
}
</script>

<style scoped lang="scss">
.blue{
  color: #2F5BD8;
}
.small-header{
  display: none;
}
@media screen and (min-width: 1025px) and ( max-width: 1440px){
    .container{
      &>*{
        margin-top: -1px;
      }
      .header{
        &__menu{
          background-image: url('../assets/images/ventures/header1024.png') !important;
          min-height: 145px !important;
        }
        .content{
          p{
            font-size: 85px !important;
            line-height: normal !important;
            .brave{
              margin: 0 !important;
              vertical-align: bottom !important;
            }
          }
        }
      }
      .investment{
        padding-top: 100px !important;
        .content{
          padding: 200px 0 125px 25px !important;
          p{
            width: 75% !important;
            font-size: 50px !important;
          }
        }
        .imgs{
          img:first-child{
            top: 20px !important;
            right: 20% !important;
          }
          img:nth-child(5){
            top: 230px !important;
            right: 0 !important;
          }
          img:nth-child(3){
            left: 150px !important;
          }
          img:nth-child(2){
            bottom: 0 !important;
            right: 200px !important;
          }
        }
      }
      .principes{
        padding-top: 10px !important;
        padding-bottom: 110px !important;
        .items{
          .item{
            &__title{
              font-weight: 400 !important;
              font-size: 22px !important;
              line-height: 28px !important;
              letter-spacing: 0.03em !important;
            }
            .text{
              font-weight: 400 !important;
              font-size: 20px !important;
              line-height: 27px !important;
            }
          }
        }
      }
      .invest{
        .list__title__mob{
          margin-top: 70px;
          display: block !important;
          width: 75% !important;
          padding: 0 25px;
        }
        .description{
          margin-top: 20px !important;
          .list{
            &__title{
              display: none !important;
            }
          }
        }
      }
      .introduce{
        .content{
          flex-direction: column !important;
          &>*{
            width: 100% !important;
          }
          .request p{
            font-size: 58px !important;
          }
          .list ul{
            padding-left: 20px !important;
            li{
              font-size: 19px !important;
              span{
                left: 20px !important;
              }
            }
          }
        }
      }
      .contact{
        padding: 100px 0 !important;
      }
    }
}
@media screen and (min-width: 769px) and (max-width: 1024px){
  .container{
    &>*{
      margin-top: -1px;
    }
    .header {
      &__menu {
        background-image: url('../assets/images/ventures/header768.png') !important;
        min-height: 90px !important;
        background-position:  top 0px right 0 !important;

      }
      .content{
        p{
          font-size: 68px !important;
          line-height: normal !important;
          .brave{
            margin: 0 !important;
            font-size: 20px !important;
            width: 150px !important;
            line-height: 25px !important;
            vertical-align: baseline !important;
          }
        }
      }
    }
    .investment{
      padding-top: 50px !important;
      .content{
        padding: 90px 0 70px 8px !important;
        p{
          width: 75% !important;
          font-size: 38px !important;
        }
      }
      .imgs{
        img:nth-child(4){
          top: 80px !important;
          left: 10px !important;
          width: 40px !important;
          height: 40px !important;
        }
        img:nth-child(3){
          top: 0px !important;
          left: 80px !important;
          width: 75px !important;
          height: 75px !important;
        }
        img:first-child{
          top: 20px !important;
          right: 20% !important;
          width: 140px !important;
          height: 110px !important;
        }
        img:nth-child(5){
          top: 150px !important;
          right: 20px !important;
          width: 180px !important;
          height: 175px !important;
        }
        img:nth-child(2){
          bottom: 0 !important;
          right: 200px !important;
          width: 68px !important;
          height: 62px !important;
        }
      }
    }
    .principes{
      padding-top: 10px !important;
      padding-bottom: 70px !important;
      .items{
        padding: 50px 8px 0 8px !important;
        .item{
          &__title{
            font-size: 20px !important;
            line-height: 25px !important;
            letter-spacing: 0.03em !important;
            p{
              margin-left: 20px !important;
            }
            img{
              width: 48px !important; ;
            }
          }
          .text{
            font-size: 16px !important;
            line-height: 20px !important;
            letter-spacing: 0.04em !important;
          }
        }
      }
    }
    .invest{
      .list__title__mob{
        margin-top: 70px;
        display: block !important;
        width: 75% !important;
        padding: 0 25px;
        p{
          font-size: 38px !important;
          line-height: 48px !important;
          letter-spacing: 0.03em !important;
          text-transform: uppercase !important;
        }
      }
      .description{
        margin-top: 20px !important;
        .list{
          &__title{
            display: none !important;
          }
          .items{
            margin-top: 0 !important;
          }
        }
      }
      .advert{
        padding: 48px 8px !important;
        p{
          font-size: 34px !important;
          line-height: 110% !important;
        }
      }
    }
    .introduce{
      .content{
        flex-direction: column !important;
        &>*{
          width: 100% !important;
        }
        .request p{
          font-size: 38px !important;
        }
        .list ul{
          padding-left: 20px !important;
          li{
            font-size: 19px !important;
            margin-bottom: 20px !important;
            span{
              left: 15px !important;
            }
          }
        }
      }
    }
    .contact{
       padding: 70px 0 !important;
      .title{
        width: 95% !important;
        margin: 0 auto;
        p{
          font-weight: 400 !important;
          font-size: 38px !important;
          line-height: 48px !important;
          letter-spacing: 0.03em !important;
        }
      }
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 768px){
  .small-header{
    display: block !important;
  }
  .container {
    & > * {
      margin-top: -1px;
    }
    .header {
      &__menu {
        background-image: url('../assets/images/ventures/header320.png') !important;
        min-height: 120px !important;
        background-position: top 0px right 0 !important;

      }

      .content {
        p {
          font-size: 34px !important;
          line-height: 110% !important;
          .brave {
            display: block !important;
            margin: 0 !important;
            font-size: 16px !important;
            text-align: left !important;
            line-height: 20px !important;
          }
        }
      }
    }
    .investment{
      padding-top: 70px !important;
      .title{
        padding: 0 15px !important;
        img:nth-child(1){
          display: none !important;
        }
      }
      .content{
        padding: 100px 0 60px 8px !important;
        p{
          width: 90% !important;
          font-size: 22px !important;
          text-align: center !important;
        }
      }
      .imgs{
        img:nth-child(4){
          top: 80px !important;
          left: 10px !important;
          width: 30px !important;
          height: 30px !important;
        }
        img:nth-child(3){
          top: 10px !important;
          left: 15% !important;
          width: 55px !important;
          height: 55px !important;
        }
        img:first-child{
          top: 40px !important;
          left: 35% !important;
          width: 80px !important;
          height: 66px !important;
        }
        img:nth-child(5){
          top: 0px !important;
          right: 10px !important;
          width: 105px !important;
          height: 100px !important;
        }
        img:nth-child(2){
          bottom: 0 !important;
          right: 30% !important;
          width: 74px !important;
          height: 67px !important;
        }
      }
    }
    .principes{
      .title{
        padding: 0 15px !important;
        img:first-child{
          display: none;
        }
      }
      padding-top: 10px !important;
      padding-bottom: 70px !important;
      .items{
        padding: 38px 16px 0 16px !important;
        flex-direction: column !important;
        .item{
          width: 100% !important;
          &__title{
            font-size: 22px !important;
            line-height: 28px !important;
            letter-spacing: 0.03em !important;
            p{
              margin-left: 20px !important;
            }
            img{
              width: 48px !important; ;
            }
          }
          .text{
            font-size: 16px !important;
            line-height: 20px !important;
            letter-spacing: 0.04em !important;
          }
        }
      }
    }
    .invest{
      .title{
        img:first-child{
          display: none;
        }
      }
      .list__title__mob{
        margin-top: 70px;
        display: block !important;
        padding: 0 16px;
        p{
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
          text-transform: uppercase !important;
        }
      }
      .description{
        margin-top: 20px !important;
        flex-direction: column !important;
        .list{
          &__title{
            display: none !important;
          }
          .items{
            margin-top: 0 !important;
            ul{
              padding: 0 16px !important;
              li{
                font-size: 16px !important;
                line-height: 20px !important;
                letter-spacing: 0.03em !important;

              }
            }
          }
        }
        .img{
          width: 100% !important;

          img{
            width: 100% !important;
          }
        }
      }
      .advert{
        padding: 36px 17px 72px 17px !important;
        p{
          font-size: 16px !important;
          line-height: 20px !important;
          letter-spacing: 0.03em !important;
          width: 100% !important;
          text-align: left !important;
          margin: 0 !important;
        }
      }
    }
    .introduce{
      .title{
        img:first-child{
          display: none;
        }
      }
      .content{
        flex-direction: column !important;
        margin-top: 40px !important;
        &>*{
          width: 100% !important;
        }
        .request p{
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
        }
        .list ul{
          padding-left: 16px !important;
          margin-top: 36px !important;
          li{
            font-size: 14px !important;
            margin-bottom: 18px !important;
            letter-spacing: 0.04em !important;
            span{
              left: 10px !important;
            }
          }
        }
      }
    }
    .contact{
      padding: 50px 0 !important;
      .title{
        width: 95% !important;
        margin: 0 auto;
        p{
          font-weight: 400 !important;
          font-size: 22px !important;
          line-height: 28px !important;
          letter-spacing: 0.03em !important;
        }
      }
      .form{
        margin-top: 30px !important;
        width: 80% !important;
      }
    }
  }
}


.container{
  .header{
    background: linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
    position: relative;
    z-index: 1;
    &__menu{
      z-index: 10;
      background-image: url('../assets/images/ventures/header-bg.png');
      background-repeat: no-repeat;
      min-height: 300px;
      background-position: right;
    }
    img{
      //margin-top: -90px;
      //z-index: -99;
      //text-align: right;
      //display: block;
      //margin-left: auto;
      position: absolute;
      z-index: 3;
      right: 0;
      top: 0;
    }

    .content{
      padding: 25px;
      .p{
        font-family: 'Oxygen', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 136px;
        line-height: 95%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0;
        //width: 1350px;
        .brave{
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          width: 300px;
          text-align: center;
          display: inline-block;
          font-weight: 400;
          font-size: 38px;
          line-height: 48px;
          //display: flex;
          //align-items: center;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          margin: 0 70px 70px 0;
          vertical-align: super;
          svg{
            margin-right: 11px;
            vertical-align: baseline;
          }
        }
      }
    }
  }
  .investment{
    width: 100%;
    background-color: #010C28;
    padding-top: 150px;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .content{
      padding: 250px 25px;
      position: relative;
      p{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        color: white;
        line-height: 105%;
        width: 45%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }
      .imgs{
        img:first-child{
          position: absolute;
          right: 30%;
          top: 50px;
        }
        img:nth-child(2){
          position: absolute;
          bottom: 200px;
          right: 40%;
        }
        img:nth-child(3){
          position: absolute;
          top: 0px;
          left: 300px;
        }
        img:nth-child(4){
          position: absolute;
          top: 125px;
          left: 50px;
        }
        img:nth-child(5){
          position: absolute;
          top: 300px;
          right: 150px;
        }
      }
    }
  }
  .principes{
    background-color: #010C28;
    position: relative;
    padding-bottom: 180px;
    //margin-top: 90px;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .items{
      padding: 100px 25px 0 25px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      .item{
        width: 28%;
        &__title{
          display: flex;
          align-items: center;
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 35px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #F0F0F0;
          p{
            margin-left: 35px;
          }
        }
        .text{
          font-family: 'Exo', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 26px;
          line-height: 125%;
          color: #F0F0F0;
          p{
            margin: 0;
          }

        }
      }
    }
  }
  .invest{
    background-color: #010C28;
    .title{
      padding: 1px 25px;
      img{
        width: 100%;
      }
    }
    .list__title__mob{
      display: none;
      p{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        line-height: 105%;
        margin: 0;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
      }
    }
    .description{
      padding: 0 25px;
      margin-top: 90px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .list{
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &__title{
          p{
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            font-size: 58px;
            line-height: 105%;
            margin: 0;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #F0F0F0;
          }
        }
        .items{
          margin-top: 50px;
          ul{
            list-style-image: url("../assets/images/ventures/invest/dot.svg");
            li{
              font-family: 'Oxygen';
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              margin-bottom: 20px;
              line-height: 25px;
              letter-spacing: 0.03em;
              text-transform: uppercase;
              color: #F0F0F0;
              &::before{
                margin-left: 15px;
              }
            }
            li:before{
              margin-left: 15px;
            }
          }
        }
      }
      .img{
        width: 45%;
        img{
          width: 100%;
          float: right;
        }
      }
    }
    .advert{
      padding: 80px 80px 150px 80px;
      p{
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 48px;
        text-align: center;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F0F0F0;
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  .introduce{
    background-color: #010C28;
    .title{
      padding: 0 25px;
      img{
        width: 100%;
      }
    }
    .content{
      padding: 0 25px;
      display: flex;
      margin-top: 90px;
      justify-content: space-between;
      align-items: flex-start;
      .request{
        width: 40%;
        p{
          font-family: 'Oxygen', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 60px;
          //margin-top: 90px;
          line-height: 105%;
          margin: 0;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #F0F0F0;
        }
      }
      .list{
        width: 40%;
        ul{
          list-style-image: url("../assets/images/ventures/invest/dot.svg");
          li{
            &:not(:last-child){
              margin-bottom: 25px;
            }
            span{
              font-family: 'Exo', inherit;
              font-style: normal;
              font-weight: 400;
              font-size: 20px;
              line-height: 27px;
              color: #F0F0F0;
              position: relative;
              left: 35px;

            }
          }
        }
      }
    }
  }
  .contact{
    padding: 150px 0;
    background-color: #010C28;
    .title{
      width: 70%;
      margin: 0 auto;
      p{
        margin: 0;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 400;
        font-size: 58px;
        line-height: 105%;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #F0F0F0;
      }
    }
    .form{
      width: 35%;
      margin: 0 auto;
      margin-top: 90px;
      input, textarea{
        width: 100%;
      }
      input{
        border: 1px solid #828FA1;
        background: transparent;
        padding: 15px 0 15px  15px;
        border-radius: 10px;
        color:white;
      }
      textarea{

        border: 1px solid #828FA1;
        background: transparent;
        padding: 15px 0 15px  15px;
        margin-top: 20px;
        border-radius: 10px;
        resize: none;
        color: white;
      }
      p{
        padding: 17px 0 17px  15px;
        width: 100% ;
        font-family: 'Oxygen';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 105%;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #F0F0F0;
        cursor: pointer;
        text-align: left;
        background: #2F5BD8;
        border-radius: 10px;
      }
    }
  }
  .footer{
    background-color: #010C28;
  }
}
</style>