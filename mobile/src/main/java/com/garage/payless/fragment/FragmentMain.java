package com.garage.payless.fragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.garage.payless.FragmentHelper;
import com.garage.payless.MainActivity;
import com.garage.payless.R;

public class FragmentMain extends Fragment implements View.OnClickListener{

    public static FragmentMain newInstance() {
        FragmentMain fragment = new FragmentMain();
        Bundle args = new Bundle();
//        args.putString(ARG_PARAM1, param1);
//        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    public FragmentMain() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
//            mParam1 = getArguments().getString(ARG_PARAM1);
//            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_main, container, false);
        view.findViewById(R.id.button_open_scan_barcode).setOnClickListener(this);
        view.findViewById(R.id.map_btn).setOnClickListener(this);
        view.findViewById(R.id.list_btn).setOnClickListener(this);
        return view;
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.button_open_scan_barcode:
                FragmentHelper.add(getFragmentManager(), FragmentBarcodeScan.newInstance(), MainActivity.FRAME_CONTAINER);
//                FragmentHelper.add(getFragmentManager(), FragmentFillPriceItem.newInstance("4820034921739"), MainActivity.FRAME_CONTAINER);
                break;
            case R.id.map_btn:
                FragmentHelper.add(getFragmentManager(), FragmentMap.newInstance(), MainActivity.FRAME_CONTAINER);
                break;
            case R.id.list_btn:
                FragmentHelper.add(getFragmentManager(), FragmentList.newInstance(), MainActivity.FRAME_CONTAINER);
                break;
        }
    }
}
