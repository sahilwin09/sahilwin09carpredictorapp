from flask import Flask, render_template, request
from flask import jsonify
import requests
import pickle
import numpy as np
import sklearn
app = Flask(__name__)
model = pickle.load(open('random_forest_regression_model.pkl', 'rb'))
@app.route('/',methods=['GET'])
def Home():
    return render_template('index.html')


@app.route("/predict", methods=['POST'])
def predict():
    if request.method == 'POST':
        Year=int(request.form['Year'])
        age=2021-Year
        km_driven=int(request.form['km_driven'])
        torque_Nm=float(request.form['torque_Nm'])
        max_power_bhp=float(request.form['max_power_bhp'])
        mileage_kmpl=float(request.form['mileage_kmpl'])

        Brand_type = request.form['Brand_type']
        if (Brand_type == 'High End Car'):
            brand_type_2 = 1
        else:
            brand_type_2 = 0

        Seller_Type = request.form['Seller_Type']
        if (Seller_Type == 'Individual'):
            seller_Individual = 1
        else:
            seller_Individual = 0

        owner = request.form['owner']
        if (owner == 'First'):
            owner_First = 1
            owner_Second = 0
            owner_Third_or_Above = 0
        elif (owner == 'Second'):
            owner_First = 0
            owner_Second = 1
            owner_Third_or_Above = 0
        else:
            owner_First = 0
            owner_Second = 0
            owner_Third_or_Above = 1

        Transmission = request.form['Transmission']
        if (Transmission == 'Mannual'):
            transmission_Manual = 1
        else:
            transmission_Manual = 0

        Fuel_Type=request.form['Fuel_Type']
        if(Fuel_Type=='Diesel'):
            fuel_Diesel=1
            fuel_Gas=0
            fuel_Petrol=0
        elif(Fuel_Type=='Petrol'):
            fuel_Diesel=0
            fuel_Gas=0
            fuel_Petrol =1
        else:
            fuel_Diesel = 0
            fuel_Gas = 1
            fuel_Petrol = 0

        prediction=model.predict([[age,km_driven,torque_Nm,max_power_bhp,mileage_kmpl,brand_type_2,seller_Individual,owner_Second,owner_Third_or_Above,transmission_Manual,fuel_Gas,fuel_Petrol]])
        output=round(prediction[0],2)
        if output<0:
            return render_template('index.html',prediction_texts="Sorry you cannot sell this car")
        else:
            return render_template('index.html',prediction_text="Selling Price of this Car should be INR : {}".format(output))
    else:
        return render_template('index.html')

if __name__=="__main__":
    app.run(debug=True)

