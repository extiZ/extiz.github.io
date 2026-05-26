/**
 * external.js — Способ 4: Подключение внешнего JS-файла
 * Используется в task1.html через <script src="external.js" defer></script>
 * Автор: Печко А.А. | ПЗТ-43
 */

'use strict';

/**
 * Вызывается при нажатии кнопки «Запустить внешний скрипт».
 * Выводит в блок #result-external информацию о текущей дате/времени.
 */
function runExternalScript() {
    var now    = new Date();
    var output = document.getElementById('result-external');
    if (!output) return;

    // Форматируем дату и время вручную (без библиотек)
    var day    = String(now.getDate()).padStart(2, '0');
    var month  = String(now.getMonth() + 1).padStart(2, '0');
    var year   = now.getFullYear();
    var hours  = String(now.getHours()).padStart(2, '0');
    var mins   = String(now.getMinutes()).padStart(2, '0');
    var secs   = String(now.getSeconds()).padStart(2, '0');

    output.innerHTML =
        '<span class="res-label">Способ 4 — внешний файл:</span><br>' +
        '📁 Файл: <code>external.js</code><br>' +
        '📅 Дата: <strong>' + day + '.' + month + '.' + year + '</strong><br>' +
        '⏰ Время: <strong>' + hours + ':' + mins + ':' + secs + '</strong><br>' +
        '✅ Функция <code>runExternalScript()</code> выполнена успешно!';

    output.classList.add('result--visible');
}
