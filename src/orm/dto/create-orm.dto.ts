import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, IsArray, IsObject, IsNumber } from 'class-validator';

class PatientAddress {
  @IsOptional()
  @IsString()
  address_1: string;

  @IsOptional()
  @IsString()
  address_2?: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  postal_code: string;
}

class TestCode {
  @IsOptional()
  @IsString()
  code: string;

  @IsOptional()
  @IsArray()
  genes?: string[];

  @IsOptional()
  @IsString()
  client_order_number?: string;
}

export class CreateOrmDto {
  @IsOptional()
  @IsString()
  mrn: string;

  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsOptional()
  @IsString()
  npi_number: string;

  @IsOptional()
  @IsArray()
  specimenTypeId: string[];

  @IsOptional()
  @IsDateString()
  specimenCollectionDate: string;

  @IsOptional()
  @IsBoolean()
  statTesting: boolean;

  @IsOptional()
  @IsString()
  paymentOption: string;

  @IsOptional()
  @IsString()
  accountId: string;

  @IsOptional()
  @IsString()
  orderingProviderName: string;

  @IsOptional()
  @IsBoolean()
  kitRequested: boolean;

  @IsOptional()
  @IsString()
  externalOrderId: string;

  @IsOptional()
  @IsString()
  externalSecondaryPatientId: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  dateOfBirth: string;

  @IsOptional()
  @IsObject()
  patientAddressObject: PatientAddress;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsArray()
  ethnicities: string[];

  @IsOptional()
  @IsString()
  ethnicityOther?: string;

  @IsArray()
  @IsOptional()
  test_codes: TestCode[];
}
