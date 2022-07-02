<template>
  <div>

    <div class="contact-banner">
      <HeaderPart/>
      <h1 class="contact-banner__title">
        <span class="contact-us"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg" alt="elipse">contact-us</span>
        We are open <span class="color-blue">24/7</span> for any kind of <span class="color-blue">collaboration</span>
      </h1>
    </div>

    <div class="devider">
      <img src="../assets/images/contact/contact.svg" alt="contact"/>
    </div>
    <div class="contact-form__container">
      <form action="#" class="contact-form">
        <div class="form-left-side">
          <h2 class="form-left-side-title">General questions:</h2>
          <p class="form-left-side-text">hello@duxgroup.com</p>
        </div>
        <div class="form-right-side">
          <input type="text" placeholder="Your contact e-mail" class="form-right-side-input">
          <textarea  placeholder="Comment" class="form-right-side-input" ></textarea>
          <button type="submit" class="form-right-side-input">Apply now</button>
        </div>
      </form>
    </div>
    <div class="footer">
      <FooterPart />
    </div>
  </div>
</template>

<script>
import HeaderPart from "@/components/Header";
import FooterPart from "@/components/Footer"
export default {

  name: "Contact-us",
  components: {HeaderPart, FooterPart}

}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.color-blue {
  color: #2F5BD8;
}

.contact-banner {
  background: url("../assets/images/contact/Union.svg") no-repeat, linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
  min-height: 702px;
  padding: 25px;

  &__title {
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 134px;
    line-height: 95%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F0F0F0;
    margin-top: 250px;
    max-width: 1390px;

    & .contact-us {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      width: fit-content;
      font-weight: 400;
      font-size: 38px;
      line-height: 48px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin: 0 70px 70px 0;
      vertical-align: top;

      & .span-svg {
        margin-right: 11px;
        vertical-align: baseline;
      }
    }
  }
}

.devider {
  padding-top: 200px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

.contact-form__container {
  background: #010C28 no-repeat;
  min-height: 700px;
  padding-top: 88px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  & .contact-form {
    display: flex;
    justify-content: space-around;
    background: url("../assets/images/contact/Vector.svg") no-repeat center;
    min-height: 454px;
    width: 1154px;

    & .form-left-side {
      margin-top: 114px;
      &-title {
        font-family: 'Oxygen',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #F0F0F0;
        margin: 0;
      }

      &-text {

        margin: 0;
        font-family: 'Exo',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 125%;
        color: #828FA1;

      }
    }

    & .form-right-side {
      margin-top: 114px;
      display: flex;
      flex-direction: column;
      &-input{
        color: white;
        resize: none;
        max-width: 510px;
        height: 48px;
        border: 1px solid #828FA1;
        border-radius: 10px;
        margin-bottom: 20px;
        background: none;
        padding: 14px;
        &:nth-child(2){
          width: 510px;
          height: 108px;
          border: 1px solid #828FA1;
          border-radius: 10px;

        }
        &:last-child{
          margin-bottom: 0;
          width: 510px;
          height: 48px;
          background: #2F5BD8;
          text-align: initial;
          border-radius: 10px;
          font-family: 'Oxygen',sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 105%;
          letter-spacing: 0.04em;
          color: white;
          text-transform: uppercase;
        }
      }
    }
  }
}
.footer{
  background-color: #010C28;
}
@media only screen and (max-width: 1300px){

  .contact-form{
    width: 960px !important;

  }

}
@media only screen and (max-width: 1160px){
  .contact-banner__title{
    font-size: 84px;
  }
  .contact-form__container{
    padding: 32px;
  }

}
@media only screen and (max-width: 998px){

  .form-left-side-title{
    font-size: 20px !important;
  }
  .form-left-side-text{
    font-size: 20px !important;
  }
  .form-right-side-input{
    width: 352px !important;
  }
}
@media only screen and (max-width: 802px){
  .contact-banner__title{
    max-width: 674px !important;
    font-size: 68px !important;
  }
  .contact-us{
    max-width: 127px !important;
    font-size: 20px !important;
  }
}
@media only screen and (max-width: 676px){
  .contact-banner{
    min-height: 523px !important;

  }
  .devider{
    padding-top: 0 !important;
  }
  .contact-banner__title{
    max-width: 674px !important;
    font-size: 68px !important;
    margin-top: 40px !important;
  }
  .contact-us{
    max-width: 100% !important;
    font-size: 20px !important;
    margin: 0 !important;
    display: flex;
    flex-direction: row;
    width: 100%!important;
  }
  .contact-form{
    flex-direction: column;
    padding: 0 30px;
    justify-content: center !important;
  }
  .form-left-side{
    margin-top: 0 !important;
  }
  .form-right-side{
    margin-top: 0 !important;
  }
  .form-right-side-input{
    max-width: 100% !important;
    width: 100% !important;
  }
}
@media only screen and (max-width: 592px){
  .contact-banner__title{
    max-width: 288px !important;
    font-size: 34px !important;
  }
  .contact-banner{
    min-height: 393px !important;
  }
}

</style>