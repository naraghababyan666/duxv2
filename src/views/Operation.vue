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
}

.department__title {
  max-width: 1110px;
  font-size: 58px;
  color: white;
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

</style>