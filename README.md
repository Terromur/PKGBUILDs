# PKGBUILDs

Это персональная коллекция PKGBUILDS от Ventureoo, но изменённая с агрессивными оптимизациями, кто хочет получить производительность выше после сборки. 
Так же были добавлены мои PKGBUILDS, которые я сопровожданию и форкнутый CachyOS-Settings.

Ссылка на официальный репозиторий PKGBUILDS Ventureoo - https://github.com/ventureoo/PKGBUILDs

Ссылка на официальный репозиторий CachyOS-Settings - https://github.com/CachyOS/CachyOS-Settings

Был добавлен dxvk-sarek-pure:
- Все теже изменения, которые есть в dxvk-pure-git

Был добавлен Cachyos-Settings с изменениями:
- Оптимизация интернета, увеличение стабильности, улучшение работы прокси, улучшение безопасности, прочие дополнительные оптимизации

Был изменён mesa-pure:
- Добавление агрессивной оптимизации -O3 и собирание пакета в native
- Включение бета Vulkan
- Добавление патчей на оптимизацию
- Отключение дополнительных ненужных опций
- Добавление опций на оптимизацию и ускорения сборки пакета
- Добавление комментария про -falign-functions=32 и -ftree-vectorize в PKGBUILD
- Добавление комментария про -D b_lto=true и -D b_lto_mode=full в PKGBUILD

Был изменён dxvk-pure-git:
- Агрессивная оптимизация -O3 и другие флаги
- Увеличение стабильности в других аспектах.
- Обновлённые флаги, взятые из Proton. Увеличение стабильности и корректное использование флагов для mingw 64
- Комментарий оставлен, если будут иметься проблемы с mingw 32 в PKGBUILD

Был изменён wine-pure:
- Агрессивная оптимизация -O3 и другие флаги
- Добавление комментария про дополнительные включения флагов оптимизации в PKGBUILD

Был изменён mpv-pure:
- Был включён Vulkan для AMD

Если какой-то пакет собирается с ошибками, то, пожалуйста, проверьте сначала PKGBUILD от Ventureoo в его официальном репозитории, а потом сообщайте баг мне.
