#!/bin/bash

# Получение общего объема ОЗУ в байтах
TOTAL_RAM=$(grep MemTotal /proc/meminfo | awk '{print $2 * 1024}')

# Получение размера страницы памяти
PAGE_SIZE=$(getconf PAGESIZE)

# Расчет значений для kernel.shmmax и kernel.shmall
SHMMAX=$TOTAL_RAM
SHMALL=$((TOTAL_RAM / PAGE_SIZE))

# Сохранение параметров
echo "kernel.shmmax = $SHMMAX" > /etc/sysctl.d/99-shm.conf
echo "kernel.shmall = $SHMALL" >> /etc/sysctl.d/99-shm.conf

# Самоудаление скрипта после применения
rm -f "$0"
