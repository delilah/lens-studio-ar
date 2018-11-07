// Use in "Initialized' event in order to display or hide elements when the front/back camera is selected
// Use this for max compatibility between Android and iOS

//@input SceneObject[] targetFront
//@input SceneObject[] targetBack


script.createEvent('CameraBackEvent').bind(function (eventData)

{
    for (var i = 0; i < script.targetFront.length; i++) {
        script.targetFront[i].enabled = false;
      }

    for (var i = 0; i < script.targetBack.length; i++) {
        script.targetBack[i].enabled = true;
      }
});

script.createEvent('CameraFrontEvent').bind(function (eventData)

{
    for (var i = 0; i < script.targetFront.length; i++) {
        script.targetFront[i].enabled = true;
      }

    for (var i = 0; i < script.targetBack.length; i++) {
        script.targetBack[i].enabled = false;
      }
});