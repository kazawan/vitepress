---
tag: React
title: React 路由 
des: reactdom 路由。。。
date: 2025-04-15 00:22:47
img: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISDxUQDxIWEA8WEBIVDRcVEg8QEg8XFRUXFhUVFxUYHiggGBolHRcVIjEhJSsrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGy8gHyUtLS0tLzAtLSsrLi0tListLS0tLS0tLS0tLS0tLSstLSsrKy0tLS0tLS8yLy0vLi0tLf/AABEIAKIBNwMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQMEBQIGBwj/xABIEAABAwEFAwgGBQoFBQEAAAABAAIRAwQFEiExE0FRBiJCYXGBkbEHFDJTodIjo8HR4RUWRFJUYoKSovAXQ3Jz0yUzNbLxJP/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAA5EQACAQIEAggDCAICAwEAAAAAAQIDEQQSITFBUQUTFGFxgaHwFbHRIjJCUlORweEzQ9LxNGKCI//aAAwDAQACEQMRAD8A8vZ6Je9rAQC5zWguIa0FxgEuOgz1XSaiW2WF9IuZVGCo2oWPYSNo0gAyR+qZyOh3JcFZUgIBO+0eaAaAEAICKvp3qFIFAJACASAEKJAdMfCA72oVuSwbUJcC2oS4FtQgOg4HRACARQClAbt23GRRFsriLPMDfJiYcOyDG+R2LVKetkePjsZVf/5Ydat5b8na9l383wM+9LydWd+rTHsN+09fksoxynTgMBDCw5ye7/hd3zKCzO8EAkAkAIBIBKFBAJAJACAje9QEQEoU9bcV4iz2hlYsFQNJkHIiRGJh6LxqDuKyaujFEvKW8/WLS54cXUmgU7NILS2k32GnESSczJJJJk9QiVkGZSyICATvtHmgGgBACA5eJEKFKigBAJACFEgBAJAJACEEgBCiBhATsfKpBoDWuy7m4dvaMqQzaD0uBI4cBv8APXKXBHi4/Hzc+zYbWb3fL++b4eO1a871fVJHs0+i3jG93X1aKxgkdOB6Op4aKb1nxf093+RnrM9EEAkAkAIBIBKFBAJAJACAje9QEQEoCYCFQa6yMQQAgBAJ32jzQDQAgEgBAQVWbx3qMpCoAQoASgJBS4q2JcNkEsLhsglhc5dS4JYEJUAIUSASgAFAb103e3B6xaObTAloPS4EjhwG/wA8ZS4I8TH4+bn2bDaze75f3zfDx2rXpeLqzuFMew37T1+SsY5TrwGAhhYc5Pd/wu75lArM7xSgL133XUrAlmEAEA4iR5ArfRw86qbjY5cRjKdBpTvryIbfY3UX4HxMA5GRBn7lhVpSpSyyNlCvGvDPHYrLWbhIAUKJAJAJACAje/xQEQEqAmAhUAgNdZGIIAQAgFr2IBoBIAQCQCQENVm8d6hSJQpNSGUqojNe4LmNpeZOCk0A1XcOAE78j2QpKVglc03uuppw4X1I6QNWD/UAe4LH7ZdBbe6vdVPGr86fbGhPZbTdAD8VJ4JZzZFVxJ6jJjfw3ZqWmXQquq3T7mp41vnVtIaEZtFz+5q+Nb51PtDQXrFz+5q+Nb50+0NA9Yuf3NXxrf8AIn2hoalgs11ACvUouZSGZxmqZG44SXAzuyWOZ3scfb6DrdQneXcrr3z5FW23zdlUgVGVXAE4Y2rW9sBw+IRRa2M6GDoUG3Tja/j/ACRsuSw2rKxWgsqxkx8mY/dcA7vErLM1udNkedvG7atB2GswtzyOZY7/AEu0KzTTIUyqQ1eTB/8A0R+47vXZgf8AL5Hn9Kf+P5ooW8/TVP8Adf8A+xXPV/yS8X8zrw/+KHgvkV1rNoIBKFEgBAJARvf4oCMCVASgQqAQCQGwsjEEAKAWvZ5oU6LTExl8FsdOajns7c7afuY5o3tfU5WsoIUSEEhRlpiYMcYyWx05qKk07PjbQxUk3ZPU5WsyKrxBUKeo5AXNStlsbQr4tns3uOE4SS2IExpmpJ2QSuz7FQ5H2ClZ30RSw0XAmsTVrSREEl5dIEDcQFqcne5k8sU29EfLvSRycs9jdZzZcWCsyo4hzsYGHZ4cMiemdSdy2Qlfcw0aTXE8YswMsIEkGNxgwVm6c1FSaaT420MVJN2T1OZWBkR1GT2owQFYlNq6bsaG+sWnm0hm0Hp8CRvHAb+zXCUuCPEx+PnKfZsNrN7vl74vh47Ur2vN1d2fNpj2G8Os8T5edjGx2YDAQwsLLWT3f8LuKCyO8bHkEEGCDIIyIPEFAe3u7lZStFAWS3sGHpVZzccoLoEt0GcnPgscttUW/Mzb65K1qXPog2iiRLS0YngbpaNe0ZdiqkmRo+xXT6PLvs5xNpOqPiMVSpUdrrzQQ34KRrTg7xdiVKMKiyzV0ea5dciLBTslptVnDmVqXOcG1XvZicQSHB8xk6YEaqKo5S1EclnGPDTw7v2PkjaLi0vDXFg9pwa4tbPF2gWwEWJUCxBQoYggO6NJzzhptc90TDWlxy1MBAQVKkZb/JARDNQErYCoHKA7r0XMMVGuY6JAc1zDB0MHcgIpQHovXDwHxXs/Gav5V6nD2KHNh64eA+KfGav5V6jsUObAW13AfFPjNX8q9R2KHNh64eA+KfGav5V6jsUObJjertmKeFuTy6cIxEkAQXakZaK/F5fey/a23dv25jsa2vp4a/uJl6OHRHxWt9K1H+FeprfR1N8X6Eovx/6rf6vvWt9Iz5I1voqn+Z+n0I33w89FvxWS6UqL8K9TNdG01xfoQOvBx3D4rYumKq/CvU2LAwXFktS9nGm2ngaMJcQQ0BxxRMu1OmU6LL4vJfaUdXa+rtpyXAvY1s3p4a/uQevu4D4qfGav5V6jsUObI33m4H2R8VPjNX8q9S9hhzZ6T0fX+2leNE1oZTfipF2gaXiGT2uwj+Jc2L6RqYilkkkuJso4aNOeZM+y/k5znRVqGpQDsTGEZkzID3dNrToPGYC8exl2aUpWnK8Vql9XxS4et7HzP0vX202unQpw51Gm41t+F1UtIaevC0HseF6eAxs8MpZUne2/df6lxFCNVq72PCflF3AfFd/xmr+Vepz9ihzZNVvlxpsZgaMGOCAAXYiCcRGbtMp0T4vJXajq7X1dtOS4d47Gtm9PXzIReJ6TQRvVXTEnpOCaDwSX3W7nNqswLdpT9neOCwxeDhOHX4fWPFcvfFcC0azUurqbli7bsaG+sWjKmM2g9PgSN44Df5+JKXBHBjsfOU+zYbWT3fL3xfDx2zr3vN1d+fNYPYbw6zxPl52MbHbgMBDCwstZPd/wu4oLI7xIAQCBQGvdd/WigIo1Ib+o4Y2T2HTuhLJ7i7R+hLDafXKFK1WWtgp1aTcYjFhGc4R0KrTiafiDAWhpmqrSqSd4StwfHTmuT79uadkZnLy+qd3Xf9GG7R72ss7HE88l2Ko4nUw0OJO8xOqsVqbYQjTjlitD5oz0lVgxzTZ6ZcSMLsTwBG6Mz4ELZkLmOqXpPtLdKFH635kyIZi0z0u2ofo9D675kyIZiKr6V7U79Ho/W/MmRDMV2elCs1+J1npPyOQc9uo4nEPgmRDMVx6SrQdKFLxq/emUXO/8R7R7ml9b96ZELi/xItHuaX1v3pkFw/xItHuaX1v3pkFyS0+k2s50ts9JogCC57tN8jD5JkFyL/Em0e5pfW/emQXMJbTAWvYgGgBAJAJACASASASAEBXraqMqO8ILYIkEQetAe3uflNeTbrq4LRiDCWU6jw19ak0BmQcRzvaObpPWFqcftGaeh4nOSXOL3Elz3OJc57iZLnE5kk7ytuxgCASAEBuXHQ2Q9Yr5UhBDTPP7d+egjNFiKkFKFN2vv796Hg9IYpVqiw1FZpX1/lX+b4eJxf8AaNudrSEUZJayZwSfjGmfBdvw5rDqtB5uduH/AFxN+ApQw0pRkkpN+nBXfD5mBUZPauE9chKhRIBIAQACgPVcg7+tlnqubZan0RBdVpPGKkXZAOA6J7CJjOYW+hQVadjlxeJ6inmXMyr+vSvarQ6taqprPBc2noGU24smsaMgNO2M5WpxUW0johJyim97IznmAoZEW1KlwG0KARqFAcgSgJWiFQNAJAJAJAJAbOvYsjEaAEAkAkAIBIBIAQCQCQFeqc1iykrNAqD2NzWN5ua0OA5uJ7tRoA2cv4HeC1v7yMlseOWwxBAIlAa923e1rdvaMqYzaD0uBI8hvWuUuCPEx2OnOfZsNrJ7vl74vh47UrzvB1Z0nJg9hvDrPWsoxynbgcDDCwstZPd++BDZbSWGRmOkOP4rtwmLnh53Wq4r3xOitRVRWe5Pa7MHDaUs29IcP74LsxeEhUh2jD6riuXvijTRrOL6upuZtRs9q8c7CAqFBACAmsVkfVeGUxJOvBo3kncFsp05VJZYmqtWhRg5z2N222llkpmhQOKu4fSv3t/HgN2vb3VJxw0Orp/e4v36LgeXRpTxlRVqukVsvfq+Py89tF5x7JG4yoAwSEA9mgDZpYHQEKgaASASASASAEBtLIxBAJACASASASAEAkAkBxUfHaoUrqAnZoFQerug/wDSLT/uO8qSwf3kZLY8qszESA2bosYpgWmvAY3NjT0uBI8gtU5X+yjw8fjZVZ9lw6zN78u9fV+RWv29fWKpe1uzpzLGD2Wk6mPgsoRyo78Hg44dSdlmbu7beCvwKb7HUDBULHCmcw7CcMbjPBbnTmo5mtDdHE0ZVHTU1m5X1FZrJUqTs2OfGsAkDtKQpyn91XLWxFKjbrJKN+bO7DaNnU5wOGYqNzBy8iurBYp4epq9Hv8AW3cStSVWF1ry995avdjKjjWoMwUyTDA4vLBOQxHN0aSc114zDddTVek82mtla/fb5o00KuSTpzVuWt/K5jvZPavGO0hUKTWKyPqvFOmJJ14NG8nqWynTlUlliaq1aFGDnM9Ne1ehY6YpWR2Ks5o25MYqTs5nWcojTUmF31KkcPFwp7353dub7+48qjSljJqpVvlS5WV+S5rmzyJMmTmTmScyeteYe0lbRCQHVMICR2ncqBhAHegF3oAjrQHCAEAkAkAkBtrIxEgBAJAJAJACASASA5qOgKFKxKgEgLDNAqD1V0f+ItP+6fKksH95GS2PKrMxLtzWUVKwBzaBid1gbvEhYzdkef0niXh8O5R3ei8/6uO+bcalQgHmNJDBuyyLu/yUhGyJ0Zg1h6Kb+89X9PL5lFlJzzhY0ucdAASfALYouWi1O+VSFNZptJc3oblaw1BbH1to2jSBYajjUpzgLQA0snQ+yMWS7pUpKs53stOK28PTU+ehiqUsHGioOctbKztmu7u/du7O5XvayOrNDrO+mabQBsmVaYZSeSYwnIEu1k5zKwrU3UScGrck1o/Tc3YPERw8nGvGWZ/icXeS433atyWltSvygoubaHlzSAXc0kEB+Qkg785WrExaqO6O3ourCeGgotOy1XLkmVLJaiwyMx0hx/FZ4TFzw87rVcV74nXWoqorPcsWuzBzdrSzb0hw45fYu3F4SFSHaMPquK5e+KNFGs4vq6m/AqWaxOrPDKY5287gOJPBeXTpSqSyxN9atCjBymbFstbLHT2FnM1z/wB1+XN/HgN3n3VKkcNHq6f3uL9+i4HmUaM8ZPraukeC9+r4/LzJM5nM75zJ615h7OwkAIAac0BK7RUHTdR2hAXuT9kpVrTTpV3mnTcSC4FoMwS0SchJgd6ygk3ZmmvOUKblBXaOL7s1OlaalOi81KTXQxxLSTkMWYyMGRPUkkk2kWjKUqalJWbKTdR2hYm05QCQCQCQAgNtZGIkAkAkAIBIBIBIAQENc6KMpCoAQE7NAqD2Fz2d5ue0uDSW43GYygBkmf4XeBWt/eRktjx62GJtclzz3jfgEeP/AMWqrsjwunv8dNvbN/Bh/wBlbT3dy/Z8T6BpUXBlUvJqNJDDXbAwgOPAzzd8yt8Lyhli7P5+f8HnV0oYhVasc0baO18r1u2u/T7XC1jQfQcyjQFVhc2kWG1M2ZzacQpZ6OwaEdYXS4uMIZlta6tw4eNjzI1I1K1Z0pJOd1B32atm8M26fcWKVWm+1bWjTIohjG1fonRVeXjZkMjokBxduDVmpRlVzQWmiem7vpp3b3OedOrSwvVVpJzbbX2topfa+1/7LRLmzJp0alFtVtpcMLmvAplwc6o8+zUDegAc8RieuVy5ZU1JVH5c3z7vE9Z1KeJnTlh1qmvtWslHjG/G60sr230sZa5j1i9c7ajqgbSGKfbG4DiTuXdgK9SnV+xqnujlxnVqnmn5fQ2rY8UKZFmEvLWmuS0NdSfnjAEnEAIg5anJeniKbjTnOhFbu9nfTnbn3cDz4whXqQdSTat5eHh38TydQTnv39a+deup7S00ISoUSASAG696AmdoqBt1HagO7LR2j2sxBuIxLtAs6cc8lG9rmurU6uDla9if1DnObtaQwvLec8jFG8ZHJSayycdy0554KVrX5lVzYfEh0OiWmWnrB4LEzI0AkAkAIBIDbWRiJAbXJq6GWnah5ILWNwQQBLpgnLTJYSlYySuW/wAyq/vKfjU+VTrEMovzKr+8p+NT5U6xDKTDkHWLA7bU8WIjDzo0mZ1+HenWIZSej6NrU7SrR8avyJ1iGUsO9FNrAnbUPGt8idYi5SnW9HVpbrVo+NX5U6xEyla0cgK2BrhWplxLgRzoEdYk+ICmdFylf8wrR7yl41flTOhlD8wrR7yl41flTOhYlZyGrj2qtMDeRtDHdAVzoZTq+7wp2ey+o2aoXkz6w4GRnOIZZSZiBoJ4old3Yemh5NZmJauu17KqHn2dH9h+7I9yxkro48fhu00JU1vuvFe7Fm+7vLXGqwYqTudIzDScz3HUFYwlfRnJ0XjlUgqNR2nHSz42/nmvMxaz8iBrCzZ7C3PQvdWFp27KmCzEtc1zqn0bm4QC0MBkmJEATI3arvbqKpnTtHx0t4Hz0Y0J4bqJwzVNU0o/avd63aslxu3a3PYivE1a4aLJUe+kGkYDVcKoJOZqYnS4cDJAGWSxqudW3VNtcr6+eupswsKOFbeKglJu91FZfCNlp3qybeuuhRvioHWioWkEYtRoSAAT4grRXadSTR6OAjKOGpqSs7bcuS/Y5uy76leqKVIS46k+ywb3OPBYQg5OyN9atGlHNI9NfNpo2Gn6rZTjtBA29TKWmN/73Bu7z6XV6mOWG/M82nRli59bV+7wXv1fE8rZbW5jp1B9sE+119vWphMXPDzzLVPdc/7PRq0Y1I2/YsWyyhzdrSzHSHDjl9i7cXhIVYdow+q4r36o0Uazg+rqb8GZdUb1452kKgEgG3XvQErtFQdN1HaEA6JbiGMEtnnAalbKTgpp1FePExnmyvLoyTHR50sqHM7OKrGBo3BzSxxOfWPtUqOLm8mi4CF8qzblduo7QsDI5QCQAgEgEoDbWZiCAsWO31KWLZOw424X5AyO/Q5nPrUaTLcqqkCUB0azsODE7BMhuI4Z4xpKhSOVSClQBKAjtFdxAYXOLRm1uIlrZ4DQKFIJQopQE7dFSDQCQCQGzc3KHZU3Wao0OovID3EBzmCZgZSBOscd61Thd3R5WPwM6mapRdpO2llq07qz4P56FK9ro2RxsOKg7NpmcM6AneOBVjK+5l0f0isQsk9Jrdc+9fyuBQhbD1AKAsWCyOq1Axo384/qjeVspUnUkoo0YivGjBzl5d75Ho7ytTLC3YWR4e9wBfUg4m5ZyCNRJA3ZErrqyjQhkirN+DPNo0pYqp1lR3irW0aXhr68zybjOZzJMknMknUkrgPY2EoUnsdqNN0jQ+0OP4rrwmLlh53W3FGmtRVSNnvwNC+rBS2balndtCWh1YBuENMmWjM4oGEyI10XoY3BxnB1aMePB3uuduD7kc1Cs4yUJvhxVrPl/Z55eGd4kAN170KTO0VINuo7QgLdy0qj7TTZQg1i+KeLJswZnqiVHtqaq1GNaDpy2ZcrstTKlYEU8Tar9vLbK4BwAnDtBMRGnnKitYypUlSgoR2Whjl5LsR1LpMANGZ4DIdgWRmRoAQCQCUAIDbWZiJAJACASASASAFAcPfCFK7ioUSASgLAGSyICASAjqPjIaqA4YyUKbN0XmGDZVedROWeeCerh1LCUL6o8jpDo91X11HSovX++T8n3bFLkDbKxD7JTD7O+Sx7qlNrW5xGZlw6wCinpqdXR9epXpZqkbPbxtp5d6O7V6M7yYQNkyoDq6nVYQ3tDsLj3ArOMoydr2Oyd4xbtfwKFutTbKw0KGdb/Ndvafv6ty9KpVjh49XT34v37R49GhPFz62tpFbL3w58zzpPjv615x7GwlCiQCQE1mtZpGRmOkOP4rqwmLnhp5o7cVz/ALNNajGorMmt1ja9u2oZg+23eOOXHqXbi8JCrDtGH1XFe/VeaNFGs4Pq6nkzJXjncNuvegJXaKkG3UdqAGyDIyIzBBgg8UAiCczmd+YzQA0Zjt4hAcIBIAUAkAkBo4jxVIGI8UKLEeKEDEeKFFiPFALEeKAMR4oQRcgEhRIBKAkpDeqiMkVAkBHUfGQ1UBwxk/3qhSVUgID7z6NrY2nctmc6SzFWD3DMUxt6vOdwaMs90zpJWiejJOqqcVJ7ce7vfd/3semsdd9R20HNoRFMEc6r++Z9lvAamZO5YGNKc6ks+0eHN9/cuXPc/MdsdNR5BkGo8g8ZcTK6TYQoBIAQCQHFTRAdWG2OpOkZjpDcfxXThMXPDzzR24rn/ZqrUY1Y2Zdt1ia9u2oZg+20ag74HHqXfi8JCtDtGH1XFf1z5rzRz0azg+rqeTM2kzvO4DNePFOTstTtbtuNxyQBKAUoAGeQzKJXdkHoIo9HZgUqXA2NJIDRJOgG9ZRi5yUY6tkbSV2FRhaSHCCNRwScJQk4yVmgmmro4WJQQGgqAQCQCQAgEhBIAQCQolACAbXQqDra9SXBy6qUuBMZOZ080BKqQEBauy7alofs6LS50SYBMDeYGZ3+C2U6bm7LTxNNavGkru75JatnveSfLWhdjvU6+J9lccTntBebO8jnYmjMtdEw2SDuM5XGUYQaUdXxNWBrVasXOasnt75G3yr9KdlDDZ7C81qjxhfVa1wp2drhm6SAXug5BsgHXMQePK2dOIc+rl1f3raHyy97q2UPp86gYwkZ4J0BO8cD/Z2Rlffc87o7pBYhdXU0mt1z98UZcdfksj1Ajr8kAo6/JAKOvyQHNTTVAQqFLdhtD6Zlp11B0PaunDYqph5Xg/FcGaqtKNRWka9gv8MqB7qLHxMhwxtdIjMZTx11AXpLpaMrqUMt+MXr6o5Xg2tnfuexCL7A/wAlru0iT281YT6VjJt9Wv3/AKMewu33378yZvKID9HYf4h8q1PpBP8A1r35Gt9Gt/7H78xP5RA/o7B/EPlRdIJf6178gujWv9j9+YrPyga2o15oMIa4Egw4OgzBECQdCJGRW6HSkdnC3enqvDQ2dia/Ffx2+ZFaL7a57nCi2CSRnETuiDA7yrLpaN9Kd+9vXz0Mlg3+a3ht8yP8sD3LfEfcp8Wj+kv3/ovY3+d+/M6o3w3EJpBonMgyR1xCzpdLQzrNTSXPl6GMsHKztK/vxM631Q+q5zfZJy3bgF5mMqxq15Tjs/odVGLjTUWV1zG0EBrbIcVlYlxbLrSwuLZdaWFxbLrSwuGyHFLC4tkEsBbIcUAbIcVALZDigFshxSwFshxSwDZBLAWzHFCgKYQHSpBSgLFhsjqr8DB/qO5o4lbKVKVSWWJpr14UYZp/9m1abe2yN2VmP03+Y/eMoPfEiNACu2rUhQj1dPV8X79o82hRqYqfXVdFwS09r5nnaji4kuzJJLusnMrzm23dnrxiopJbIjAGgy4qGRvcm73p0nbO1NNSzkHmzEEg74OUmdDp1rCcb6o8rHYHrJxrU43kt9cremmvNEN7XO5pNSiMdF2Yw54J6hq3gQkZ8GYYDpOM11VZ5ZrTXS/980Y8rM9iwpQWE5wCAgc+VC2J7PZnOBLWlwaJfAnCOJ/vcmxrqVYQaUmlfRd4lTMSA5dogBAJACASASgBAJACAEBsrMxBAJAJQDYwkhrRJJgAalVJt2RJSUU29EbIslGztBr/AElUjJozA7vtK9DqqVBJ1NXyPJ6+vipNUfsxXH38l5nH5YpbrM3+j5Vj2un+mvT6GXw+t+s/X6k9nv8Aota9pszZc0BumWczlHZmDqr2uH5beFtfHQPo+r+e/e73XetTinf1Ea2Rh/k+RYPFU3+Be/Iq6Pq/qv1+pap8qbONbDTPfT/41rdeL/D7/YyWBq/qv1+oVeVVnOlgpjvp/wDGoq8V+H3+w7DV/Vfr9SpVv+idLIwfyfItqxUF+Be/Ij6Pq/qv1+p1bOUNF5bFlblTa0zhzI1OYOvd2LJ4uH5b+NtO7bYxXR1XhUy+F9e96rVlf8t0v2Vn9Hyp2un+mvT6F+H1v1n6/UPy3S/ZWf0fKna6f6a9PoPh9b9Z+v1J7TyiouZTaLK2WtIdpnnM5g9mQGidrh+W/jbTw0Iuj6v57d6vd971KlflA7Dho020QdSIJ7oAAKxnjXa0FlM6fRkc2arJz9+ZikriPTOSVCggBAXLBelWjkwy39V2bfw7li4pnFiuj6GJ1mtea0f9+ZoHlED7VnY48cQ+1pWPV9553wWUdIVml4f2if8AOmmKBpmyskvDgZG4REx36btVOr13Hwert1n/ANWebw328yl+cjP2Vn8zfkTJ3l+DVf15fs/+R2OUDP2Vn8zfkV6vvJ8Hq/ry/Z/8ixQv+kWVA6mKJLCGYedtCQRGTRG7XiVHBmmp0RXjUpyU3NJ630ttzb9DzK2n0gkAnaIAQCQCQCUAIBIAQAgBAbKzMRIBKAbGFxDWiXEwANSqk27IkpKKbk7I9G+yssdFtXE2pWeCAAc6ZGRBG4ZTlMiNF6SUcLFyteW3d5d3M8ZynjpqKdob6b6Pj3vh+55yvWc9xc4y46ledKbk80tz2IQjTioxVkiMlYmYs0As0As0As0AZoBZoBZoBZoAzQCzQCUKNAJAJACA5JhAQudKhTpjOKpDtAJAJAJAIoAQCQAoBIBIAQAgBACA2FmYiQDYwuIa0S4mABqVUm3ZbklJRTlJ2RuNayyMl0PtDhkNzR93mvQSjhY3es3798zx2546dlpTXr/fyMSvWc9xc4y46lefKTk80tz16cI04qMVZERKxMxf2EAIBIBIAQCQCQCQAgEgBQokAkAkAIDklAQudKhTtjOKpDpAJAJACA5JQAgEgBQCQCQAgBACAEAIDYWZiIqA2uS7RjeYzDRHESc16HR6WaTPJ6XbyRXeZl5OJrVJM89w8DkuSu26sr8zvwqSowtyRWWo6Dk7kAFAIoAKASASASAEAigEgBAIqFEUAIBIBICOooDlmqFJFSAgEUAigEUByNFANUCQCUAFAJACAEAIAQAgP//Z
---



# React 路由 

::: tip ♻️ 参考
注意式v6
[react router v6 中文文档](https://www.reactrouter.cn/)
:::


## Ⓜ️安装

```sh
$ npm install react-router-dom@6
```

## 🈁使用

主要用到 `BrowserRouter`, `Routes`, `Route`,`Outlet`, `Navigate`,`Link`

 - `BrowserRouter` 用于包括路由 但凡要用的页面转换的都要用到
 - `Routes` 相当于vue3 的 `routerView`
 - `Route` 具体路由配置
 - `Outlet` 占位符
 - `Navigate` 相当于返回path的页面
 - `Link`  \<a> 标签
  
## ❇️配置路由

```js
const Main = () => {
    return (
      <>
        
        <BrowserRouter>
          <Navibar  />
          <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />}  />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
```

## 🔱`Link`配置按钮

```js
import { Outlet, Link } from "react-router-dom";
import { useAuth ,AuthContext} from "../stores/useAuth.jsx";
function Navibar() {

    // 权鉴系列
    const {auth,setAuth} = useAuth()
    const handleLogAction = () =>{
        setAuth(!auth)
    }

    const loginStyle = `
        ${auth ? 'bg-green-500' : 'bg-red-500'}
        col-span-9 
    `

    return (
        <>
            <div className="w-full h-16 bg-gray-200/30 px-2 fixed top-0 left-0  backdrop-blur-sm ">
                <div className=" w-full grid  grid-cols-12 gap-x-2 ">
                    <div className=" col-span-1 ">
                        <Link to='/'>Home</Link>

                    </div>
                    <div className=" col-span-1 ">
                        <Link to='/about'>About</Link>
                    </div>
                    <div className=" col-span-1 ">
                        <button onClick={handleLogAction}>LOGIN??</button>
                    </div>
                    <div className={loginStyle}>
                        <div className=" w-full text-end">{auth ? '登陆了' : '未登陆'}</div>
                    </div>
                </div>

                {/* <div>About</div> */}
            </div>
            <Outlet />
        </>

    );
}

export default Navibar;


```



## 🔰简单的权鉴定
例如 About 页需要登陆才能看
假如没有登陆,就会回到主页

```js
import { Outlet, Navigate } from "react-router-dom";
import { useAuth ,AuthContext} from "../stores/useAuth.jsx";
import AuthProvider from "../components/AuthProvider.jsx";

function AboutPage() {
    const {auth} = useAuth()
    return (
        <AuthProvider auth={auth}>
            <div className=" w-full text-sm ">
                <h1>About...</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus ea nam saepe nihil expedita distinctio dignissimos, animi tempore placeat ducimus sint reiciendis. Rerum consequatur dolores mollitia reprehenderit veniam? Sunt.
            </div>
            <Outlet />
        </AuthProvider>
    )
    //  ⭕我把下面的打包成 <AuthProvider>
    // if (auth) {
    //     return (
    //         <>
    //             <div className=" w-full text-sm ">
    //                 <h1>About...</h1>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus ea nam saepe nihil expedita distinctio dignissimos, animi tempore placeat ducimus sint reiciendis. Rerum consequatur dolores mollitia reprehenderit veniam? Sunt.
    //             </div>
    //             {/* <Outlet /> */}
    //         </>
    //     )
    // } else {
    //     return <Navigate to='/' />
    // }


}


export default AboutPage
```


