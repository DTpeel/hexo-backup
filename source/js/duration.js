!(function () {
  // ǰ�油��
  function prefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  }

  // ��ʱ��ʼʱ�䣬���ո�ʽ�����޸�
  var start = Date.parse("2021-07-10T16:03:05");

  function update() {
    var now = Date.now() + 250;
    var interval = (now - start) / 1000;
    var days = Math.floor(interval / 60 / 60 / 24);
    var hours = Math.floor((interval / 60 / 60) % 24);
    var minutes = Math.floor((interval / 60) % 60);
    var seconds = Math.floor(interval % 60);

    hours = prefixInteger(hours, 2);
    minutes = prefixInteger(minutes, 2);
    seconds = prefixInteger(seconds, 2);

    document.getElementById(
      "website-duration"
    ).innerHTML = `��վ������ ${days} �� ${hours} Сʱ ${minutes} �� ${seconds} ��`;
  }

  update();
  setInterval(update, 250);
})();