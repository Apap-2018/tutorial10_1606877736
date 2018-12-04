import React from 'react';

export const FormUpdateBillingPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Update Billing Pasien</h2>

            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" defaultValue= "0"/>
            </div>
            
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue=""/>
            </div>
            
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <button className="btn btn-success" value="submit">Submit Tagihan</button>
        </form>
    )
}