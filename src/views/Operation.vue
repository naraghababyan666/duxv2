<template>
  <div>
    <div class="contact-banner">
      <Header/>
      <h1 class="contact-banner__title">
        <p class="contact-us"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg" alt="elipse">DUXGroup Operation</p>
        a Team  of real <span class="color-blue">professionals</span>
      </h1>
    </div>
    <div class="divider">
      <img src="../assets/images/opertion/departament.svg"/>
    </div>
    <div class="departament">
      <h2 class="benefits__title">We
      <span class="color-blue"> love our people</span>,
      appreciate our team, and try to become like a second
      <span class="color-blue">family</span>.
      Want to be a part of our team? <span class="color-blue">Then join us!</span>
    </h2>
    </div>
    <FooterPart/>
  </div>
</template>

<script>
import Header from '../components/Header' ;
import FooterPart from "@/components/Footer";

export default {

  name: "Operation-page",
  components:{Header,FooterPart}

}
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.departament{
  background: #010C28;
  display: flex;
  justify-content:  center;
}
.benefits__title{
  max-width: 1110px;
  font-size: 58px;
  color: white;
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
flex-wrap: wrap;
    display: flex;
    & .contact-us {
      font-family: "Oxygen", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 38px;
      line-height: 48px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #F0F0F0;
      margin: 0 70px 70px 0;
      vertical-align: top;
      max-width: 230px;
      display: flex;
      & .span-svg {
        margin-right: 11px;
        vertical-align: baseline;
      }
    }
  }
}

.divider {
  padding-top: 200px;
  display: flex;
  width: 100%;
  background-color: #010C28;
  align-items: flex-end;

  img {
    width: 100%;
  }
}

</style>