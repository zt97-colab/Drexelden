from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/jobpostings")
def job_postings():
    return render_template("jobpostings.html")

@app.route("/workstudy")
def work_study():
    return render_template("WorkStudy.html")


@app.route("/overview")
def overview():
    return render_template("apartmentOverview.html")

@app.route("/chestnut")
def chestnut():
    apartments = [
        {
            'name': '2 Bed - 1 Bath',
            'price': 1549,
            'image': 'img/chestnutphotos/c2_Bed_1_Bath.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        },
        {
            'name': '2 Bed - 2 Bath Private',
            'price': 1849,
            'image': 'img/chestnutphotos/c2_Bed_2_Bath_Private.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        },
        {
            'name': '2 Bed - 2 Bath Shared',
            'price': 949,
            'image': 'img/chestnutphotos/c2_Bed_2_Bath_Shared.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        },
        {
            'name': '3 Bed - 2 Bath Standard Bedroom',
            'price': 1014,
            'image': 'img/chestnutphotos/c3_Bed_2_Bath_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        },
        {
            'name': '3 Bed - 2 Bath Private Bedroom',
            'price': 1314,
            'image': 'img/chestnutphotos/c3_Bed_2_Bath_pb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        },
        {
            'name': '4 Bed - 2 Bath',
            'price': 1224,
            'image': 'img/chestnutphotos/c4_Bed_2_Bath.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        },
        {
            'name': '4 Bed - 2.5 Bath Townhome',
            'price': 1259,
            'image': 'img/chestnutphotos/c4_Bed_25_Bath_Townhome.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/chestnut-square/floor-plans?...'
        }
    ]
    return render_template("chestnut.html", apartments=apartments)

@app.route("/summit")
def summit():
    apartments = [
        {
            'name': '1 Bed - 1 Bath Apartment A',
            'price': 2099,
            'image': 'img/summitphotos/s1_Bed_1 Bath_Apartment_A.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-1bed-1bathapartmenta-fall2025_fullterm_9_25-9_26'
        },
        {
            'name': '2 Bed - 2 Bath Apartment A',
            'price': 1629,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Apartment_A.png',
            'terms': ['summer', 'spring'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/'
        },
        {
            'name': '2 Bed - 2 Bath Apartment B',
            'price': 1579,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Apartment_B.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathapartmentb-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Apartment C Standard Bedroom',
            'price': 1084,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Apartment_C_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathapartmentc-sharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Apartment C Deluxe Bedroom',
            'price': 1109,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Apartment_C_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathapartmentc-shareddeluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Suite A',
            'price': 849,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Suite_A.png',
            'terms': ['summer', 'spring'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathsuitea-sharedbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Suite A Private',
            'price': 1729,
            'image': 'img/summitphotos/u2_Bed_1_Bath_A_pb.png',
            'terms': ['summer', 'spring'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathsuitea-privatebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Suite B',
            'price': 964,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Suite_B.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathsuiteb-sharedbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Suite C',
            'price': 949,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Suite_C.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathsuitec-sharedbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Suite D Deluxe Bedroom',
            'price': 944,
            'image': 'img/summitphotos/s2_Bed_2 Bath_Suite_D_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathsuited-shareddeluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath Suite D Standard Bedroom',
            'price': 919,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Suite_D_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-2bed-2bathsuited-sharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '3 Bed - 3 Bath Apartment Deluxe Bedroom',
            'price': 1499,
            'image': 'img/summitphotos/s3_Bed_3 Bath_Apartment_db.png',
            'terms': ['summer', 'spring'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-3bed-3bathapartment-deluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '3 Bed - 3 Bath Apartment Standard Bedroom',
            'price': 1474,
            'image': 'img/summitphotos/s3_Bed_3_Bath_Apartment_sb.png',
            'terms': ['summer', 'spring'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-3bed-3bathapartment-standardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '4 Bed - 2 Bath Suite',
            'price': 1214,
            'image': 'img/summitphotos/s2_Bed_2_Bath_Apartment_A.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-4bed-2bathsuite-privatebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '4 Bed - 4 Bath Apartment Deluxe Bedroom',
            'price': 1469,
            'image': 'img/summitphotos/s4_Bed_4 Bath_Apartmentdb_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-4bed-4bathapartment-deluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '4 Bed - 4 Bath Apartment Standard Bedroom',
            'price': 1444,
            'image': 'img/summitphotos/s4_Bed_4_Bath_Apartment_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/the-summit-at-university-city/floor-plans#/detail/382-4bed-4bathapartment-standardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        }
    ]
    return render_template("summit.html", apartments=apartments)

@app.route("/ucross")
def ucross():
    apartments = [
        {
            'name': '2 Bed - 1 Bath A Shared Bedroom',
            'price': 929,
            'image': 'img/ucrossphotos/u2_Bed_1_Bath_A_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-1bathasharedbedroom-sharedbedroom-spring2025_spring_summer_1_25-9_25'    
        },
        {
            'name': '2 Bed - 1 Bath A Private Bedroom',
            'price': 1439,
            'image': 'img/ucrossphotos/u2_Bed_1_Bath_A_pb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-1bathasharedbedroom-sharedbedroom-spring2025_spring_summer_1_25-9_25'    
        },
        {
            'name': '2 Bed - 1 Bath A Shared Bedroom Twin Bedroom',
            'price': 1419,
            'image': 'img/ucrossphotos/u2_Bed_1_Bath_A_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-1bathbprivatetwinbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 1 Bath C',
            'price': 939,
            'image': 'img/ucrossphotos/u2_Bed_1_Bath_C.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-1bathcsharedbedroom-sharedbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 1 Bath C Private',
            'price': 1559,
            'image': 'img/ucrossphotos/u2_Bed_1_Bath_C_Private.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-1bathcprivatebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath B Private Bedroom',
            'price': 1425,
            'image': 'img/ucrossphotos/u2_Bed_1_Bath_C_Private.png',
            'terms': ['fall', 'spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans#/detail/382-2bed-2bathb-privatebedroom-fall2025_fullterm_9_25-9_26'
        },
        {
            'name': '2 Bed - 1.5 Bath',
            'price': 979,
            'image': 'img/ucrossphotos/u2_Bed_15_Bath.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-1_5bathsharedbedroom-twinbed-twinsizebed-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath A Standard Bedroom',
            'price': 954,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_A_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathasharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath A Deluxe Bedroom',
            'price': 1034,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_A_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathasharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath B',
            'price': 1074,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_B.png',
            'terms': [ 'spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathbsharedbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath C Private Deluxe',
            'price': 2009,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_C_Private_Deluxe.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathcprivatedeluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath C Shared Deluxe',
            'price': 1004,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_C_Shared_Deluxe.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathcshareddeluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath C Shared Standard',
            'price': 979,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_C_Shared Standard.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathcsharedstandardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath D Standard Bedroom',
            'price': 999,
            'image': 'img/ucrossphotos/u2bath2bed.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathdsharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath D Deluxe Bedroom',
            'price': 1024,
            'image': 'img/ucrossphotos/2bed2bathdbD.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathdshareddeluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath E Shared Bedroom',
            'price': 974,
            'image': 'img/ucrossphotos/u2_Bed_2 Bath_E_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2batheshareddeluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath E Deluxe Bedroom',
            'price': 974,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_E_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathesharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath F',
            'price': 959,
            'image': 'img/ucrossphotos/u2bath2bedF.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathfsharedbedroom-twinbed-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath G Standard Bedroom',
            'price': 979,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_G_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathgsharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '2 Bed - 2 Bath G Deluxe Bedroom',
            'price': 1004,
            'image': 'img/ucrossphotos/u2_Bed_2_Bath_G_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-2bed-2bathgshareddeluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '3 Bed - 3 Bath Standard Bedroom',
            'price': 1024,
            'image': 'img/ucrossphotos/u3_Bed_3_Bath_sb.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-3bed-3bathsharedstandardbedroom-standardbedroom-spring2025_spring_summer_1_25-9_25'
        },
        {
            'name': '3 Bed - 3 Bath Deluxe Bedroom',
            'price': 1024,
            'image': 'img/ucrossphotos/u3_Bed_3_Bath_db.png',
            'terms': ['spring', 'summer'],
            'apply_url': 'https://www.americancampus.com/student-apartments/pa/philadelphia/university-crossings/floor-plans?_gl=1*gx1doj*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNrqgcgr1gCAo6-CYC5p7-92sJz5KKKP8fCk3H6G9NCITH95ARrgNYaAsBAEALw_wcB&gbraid=0AAAAADuZ2re8FCSfi11oY3LJOBVxYfHUP#/detail/385-3bed-3bathshareddeluxebedroom-deluxebedroom-spring2025_spring_summer_1_25-9_25'
        }
    ]
    return render_template("ucross.html", apartments=apartments)


@app.route("/textbook")
def text_book():
    return render_template("textbook.html")

@app.route("/scholarships")
def scholarships():
    return render_template("Scholarships.html")

@app.route("/foodrecommendation")
def food():
    return render_template("foodReq.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)
