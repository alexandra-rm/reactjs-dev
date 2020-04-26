# ReactJS Developer course

# 1 assignment
Webpack + babel + typescript базовая настройка
Цель: В результате получим базовый скелет webpack + typescript проекта
Необходимо:
- [x] развернуть npm проект (npm init)
- [x] установить и настроить webpack
- [x] установить и настроить babel
- [x] установить и настроить typescript через babel preset
- [x] установить и настроить jest
- [x] установить и настроить eslint + prettier

Критерии оценки: + 2 балл за npm проект
+ 2 балла за установку webpack
+ 2 балла за typescript через babel loader
+ 2 балла за jest
+ 2 балла за eslint + prettier

# 2 assignment
Установка и настройка React
Цель: Самостоятельно сконфигурировать ReactJS-проект. В результате получим готовый шаблон приложения для дальнейшей разработки.
Необходимо:
- [x] добавить конфигурации для JSX/TSX через babel используем preset-react
- [x] развернуть storybook https://storybook.js.org/
- [x] написать свой первый простой компонент "Hello World, ${username}", добавив к нему Storybook + Jest тест
- [x] настроить jest
- [x] настроить loki

Критерии оценки: +1 балл за конфигурации JSX/TSX
+ 1 балл за конфигурацию storybook
+ 1 балл за компонент "Hello World"
+ 1 балл за storybook для компонента "Hello World, ${username}"
+ 1 балл за тест

# 4 assignment
Разрабатываем поле и наполняем его квадратиками. Родительский компонент "держит" данные. Дочерние компоненты реагируют на клик: меняют состояние.

Требования:
- разработку ведем по TDD
- разработка ведется от storybook

Что нужно сделать?
- [x] устанавливаем и настраиваем storybook knobs для манипуляции данными
- [x] родительский компонент должен принимать данные для отображения
- [x] проектируем родительский компонент, который будет выводить лист дочерних компонентов
- [x] правильно добавляем обработчик события click, меняющий состояние дочернего компонента
- [x] покрываем обработчики тестами

Критерии оценки:
+ 1 балл за настройку storybook knobs
+ 2 балла за компоненты с правильной иерархией
+ 1 балл за обработчик событий
+ 1 балл за тесты

#5 assignment
Используем styled-components для разработки и манипуляции стилями. Добавим стили в компоненты, разработанные в рамках предыдущего ДЗ

Что нужно сделать?
- [ ] в поле пробрасываются параметры с размерами x/y - сделать так, чтобы размеры поля менялись, при изменении этих параметров. При этом состояние отмеченных клеток должно сохраняться (игра не сбрасывается) 
- [ ] добавить анимацию в любом виде для клеток - для клеток, которые меняют свое состояние

Критерии оценки:
+ 2 балла за использование минимум 2 разных методов жизненного цикла, в минимум 2х компонентах
+ 2 за покрытие нового функционала тестами
+ 1 балл за stories демонстрирующие изменения