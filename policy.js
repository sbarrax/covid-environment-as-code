
function covidEnvironmentSim(){
  if (covidSpreadsFreelyThroughTheAir()) {
    return lockdown();
  }

  if (covidSpreadsOnlyFromPersonToPersonThroughDroplets()) {

    try {
      if (outdoor()) {
        wearMask();
        wearGloves();
      }

      if (backIndoor()) {
        if (haveBathroom()) {
          washHands();
        } else {
          useHandSanitizingGel();
        }
      }

      trackLocationChangesWithSmartphone();

    } 
    catch (areYouCovid19Positive()) {

      steadilyInformHealthSystem();
      selfIsolateInQuaratine();

      if (symptomsAreBad()) {
        hospitalization();
      }

    } 
    finally {

      if (covid19SpreadsAtUnsustainablePace()) {
        return lockdown();
      }

    }
  }
}

function lockdown(){

}

function washHands(){

}

function wearGloves(){

}

function wearMask(){

}

function useHandSanitizingGel(){

}

function trackLocationChangesWithSmartphone(){

}

function areYouCovid19Positive(){

}

function steadilyInformHealthSystem(){

}

function symptomsAreBad(){

}

function selfIsolateInQuaratine(){

}

function hospitalization(){

}

function haveBathroom(){

}

function backIndoor(){

}

function outdoor(){

}

function covidSpreadsFreelyThroughTheAir(){

}

function covidSpreadsOnlyFromPersonToPersonThroughDroplets(){

}

function covid19SpreadsAtUnsustainablePace(){
  // it depends on scientific committee and politician.
  return true;
}