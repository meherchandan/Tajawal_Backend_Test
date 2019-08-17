package com.tajawal.test.framework.helpers;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;



public class DateHelper{
                public static String getModifiedDate(int NumberOfDays, String dateFormat) {
                                SimpleDateFormat formats = new SimpleDateFormat(dateFormat);
                                Calendar cal = Calendar.getInstance();
                                cal.add(Calendar.DATE, NumberOfDays);
                                return formats.format(cal.getTime());
                }

   
    
    
    
    
}
