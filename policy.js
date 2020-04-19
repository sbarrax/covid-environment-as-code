if (covidSpreadsFreelyThroughTheAir() {
  // 
  return lockdown()
}

if (covidSpreadsOnlyFromPersonToPersonThroughDroplets()) {

  try {
    if (outdoor()) {
      wearMask()
      wearGloves()
    }

    if (backIndoor()) {
      if (haveBathroom()) {
        washHands()
      } else {
        useHandSanitizingGel()
      }
    }

    trackLocationChangesWithSmartphone()

  } catch (areYouCovid19Positive()) {

    steadilyInformHealthSystem()
    selfIsolateInQuaratine()

    if (symptomsAreBad()) {
      hospitalization()
    }

  } finally {

    if (covid19SpreadsAtUnsustainablePace()) {
      return lockdown()
    }

  }

}


