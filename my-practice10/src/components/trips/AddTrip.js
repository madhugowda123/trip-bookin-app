import React from 'react';

export const AddTrip = ({newTrip}) => {
    let date,number, place, type;
    const submit = (e) => {
        e.preventDefault();
        newTrip({
            date : date.value,
            number:number.value,
            place : place.value,
            type : type.value,
        });
        date.value = number.value = place.value = type.value = '';
    }

    return (
        <div className="form-container " style={{background:"wheat"}}>
            <form onSubmit={submit} className="form black-container">
             <div className="form-group">
                <label>
                    <h3>Add a trip</h3>
                    <br />
                    <br />
                    <br />
                </label>
                </div>
                <div className="form-group">

                <label>
                    Date: <br/>
                    <input className="form-control"
                        id="date"
                        type="date"
                        required
                        ref={(input) => date = input} 
                    />
                </label>
                </div>
                <div className="form-group">

                <label>
                    Number of persons: <br />
                    <input className="form-control"
                        id="number"
                        type="number"
                        required
                        ref={(input) => number = input} 
                    />
                </label>
                </div>
                <div className="form-group">

<label>
    Place: <br />
    <input className="form-control"
        id="date"
        type="text"
        required
        ref={(input) => place = input} 
    />
</label>
</div>

                <div className="form-group">

                <label>
                    Type: <br />
                    <select ref={(input) => type = input} className="form-control" >
                        <option value="Couples">Couples</option>
                        <option value="Family">Family</option>
                        <option value="Friends">Friends</option>
                    </select>
                </label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}