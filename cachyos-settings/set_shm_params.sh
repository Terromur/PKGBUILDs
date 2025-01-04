#!/bin/bash

# Получение общего объема ОЗУ в байтах
TOTAL_RAM=$(grep MemTotal /proc/meminfo | awk '{print $2 * 1024}')

# Получение размера страницы памяти
PAGE_SIZE=$(getconf PAGESIZE)

# Расчет значений для kernel.shmmax и kernel.shmall
SHMMAX=$TOTAL_RAM
SHMALL=$((TOTAL_RAM / PAGE_SIZE))

# Применение параметров
sysctl -w kernel.shmmax=$SHMMAX
sysctl -w kernel.shmall=$SHMALL

# Сохранение параметров для применения после перезагрузки
echo "kernel.shmmax = $SHMMAX" > /etc/sysctl.d/99-shm.conf
echo "kernel.shmall = $SHMALL" >> /etc/sysctl.d/99-shm.conf
