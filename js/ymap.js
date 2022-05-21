ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("yandexMap", {
          center: [55.746856, 37.595204],
          zoom: 17
      });

      var myPlacemark = new ymaps.Placemark([55.746856, 37.595204], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/marker.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-25, -50]
      });

      myMap.geoObjects.add(myPlacemark);

      myMap.controls.remove('geolocationControl'); // удаляем геолокацию
      myMap.controls.remove('searchControl'); // удаляем поиск
      myMap.controls.remove('trafficControl'); // удаляем контроль трафика
      myMap.controls.remove('typeSelector'); // удаляем тип
      myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
      myMap.controls.remove('rulerControl'); // удаляем контрол правил
      myMap.behaviors.disable(['scrollZoom']); // от
  }



  