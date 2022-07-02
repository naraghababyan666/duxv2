<template>
  <div>
    <div class="operation-banner">
      <Header/>
      <h1 class="operation-banner__title">
        <p class="operation-us"><img class="span-svg" src="../assets/images/contact/Ellipse1.svg" alt="elipse">DUXGroup
          Operation</p>
        a Team of real <span class="color-blue">professionals</span>
      </h1>
    </div>
    <div class="divider">
      <img src="../assets/images/opertion/departament.svg"/>
    </div>
    <div class="department">
      <h2 class="department__title">
        At DUXGroup, more than <span class="color-blue">350 experts  </span>working in different departments <span
          class="color-blue">around the world</span> ensure the operational activities of the
        <span class="color-blue">holding</span> and its <span class="color-blue">brands.</span>
      </h2>
      <div class="mechanism-container">
        <div class="mechanism">
          <p class="mechanism-text">
            Support
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text medium-circle">
            VIP Support
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text">
            HR
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text big-circle">
            Legal & Finance
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text medium-circle">
            Antifraud
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text">
            Design
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text medium-circle">
            BI Analytics
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text">
            CRM
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text big-circle">
            Development
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text medium-circle">
            Product Team
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text big-circle">
            PR & Marketing
          </p>
        </div>
        <div class="mechanism">
          <p class="mechanism-text big-circle">
            Integration & PSP
          </p>
        </div>
      </div>
    </div>
    <FooterPart/>
  </div>
</template>

<script>
import Header from '../components/Header' ;
import FooterPart from "@/components/Footer";

export default {

  name: "Operation-page",
  components: {Header, FooterPart}

}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.department {
  background: #010C28;
  display: flex;
  justify-content: center;
  padding-top: 96px;
  flex-direction: column;
}

.department__title {
  font-size: 58px;
  color: white;
  padding: 0 25px;
}

.color-blue {
  color: #2F5BD8;
}

.operation-banner {
  background: url("../assets/images/opertion/operation-bg.svg") no-repeat right top, linear-gradient(to bottom, #02185b, #00174e, #001542, #001135, #010c28);
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

    & .operation-us {
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

.mechanism-container {
  max-height: 1040px;
}

.mechanism {
  background: url("../assets/images/opertion/shestiryonka.svg") no-repeat;
  background-size: cover;
  width: 174px;
  height: 174px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:nth-child(1) {
    top: 168px;
    left: 143px;
  }

  &:nth-child(2) {

    width: 232px;
    height: 232px;
    top: 1px;
    left: 330px;
  }

  &:nth-child(3) {
    left: 370px;
    top: 20px;
  }

  &:nth-child(4) {

    width: 330px;
    height: 330px;
    left: 25px;
    top: -233px;
  }

  &:nth-child(5) {
    width: 232px;
    height: 232px;
    bottom: 605px;
    left: 731px;


  }

  &:nth-child(6) {
    left: 918px;
    bottom: 657px;

  }

  &:nth-child(7) {
    width: 232px;
    height: 232px;
    left: 847px;
    bottom: 645px;
  }

  &:nth-child(8) {
    left: 1087px;
    bottom: 815px;
  }

  &:nth-child(9) {
    width: 330px;
    bottom: 1631px;
    height: 330px;
    left: 912px;

  }

  &:nth-child(10) {
    width: 232px;
    height: 232px;
    bottom: 1440px;
    left: 283px;
  }

  &:nth-child(11) {
    width: 330px;
    height: 330px;
    bottom: 1792px;
    left: 523px;

  }

  &:nth-child(12) {
    width: 330px;
    height: 330px;
    bottom: 2246px;
    left: 1111px;
  }

  &-text {
    width: 114px;
    height: 114px;
    color: white;
    border: 1px solid #032B96;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

  }
}
.big-circle{
  width: 217px;
  height: 217px;
}
.medium-circle{
  width: 156px;
  height: 156px;
}
</style>