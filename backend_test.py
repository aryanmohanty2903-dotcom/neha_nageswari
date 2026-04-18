#!/usr/bin/env python3
"""
Backend API Testing for Neha Nageswari Portfolio Website
Tests all backend endpoints with comprehensive validation
"""

import requests
import json
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get the backend URL from frontend environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ REACT_APP_BACKEND_URL not found in frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔗 Testing backend at: {API_BASE_URL}")
print("=" * 60)

def test_hello_world():
    """Test GET /api/ endpoint"""
    print("\n🧪 Testing GET /api/ (Hello World)")
    try:
        response = requests.get(f"{API_BASE_URL}/")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("   ✅ Hello World endpoint working correctly")
                return True
            else:
                print(f"   ❌ Unexpected response: {data}")
                return False
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            return False
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def test_status_endpoints():
    """Test existing status endpoints"""
    print("\n🧪 Testing Status Endpoints")
    
    # Test POST /api/status
    print("   Testing POST /api/status")
    try:
        payload = {"client_name": "Test Client Portfolio"}
        response = requests.post(f"{API_BASE_URL}/status", json=payload)
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: {data}")
            if all(key in data for key in ['id', 'client_name', 'timestamp']):
                print("   ✅ POST /api/status working correctly")
                post_success = True
            else:
                print(f"   ❌ Missing required fields in response")
                post_success = False
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            post_success = False
    except Exception as e:
        print(f"   ❌ Error: {e}")
        post_success = False
    
    # Test GET /api/status
    print("   Testing GET /api/status")
    try:
        response = requests.get(f"{API_BASE_URL}/status")
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: Found {len(data)} status checks")
            if isinstance(data, list):
                print("   ✅ GET /api/status working correctly")
                get_success = True
            else:
                print(f"   ❌ Expected list, got {type(data)}")
                get_success = False
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            get_success = False
    except Exception as e:
        print(f"   ❌ Error: {e}")
        get_success = False
    
    return post_success and get_success

def test_enquiries_post():
    """Test POST /api/enquiries endpoint with various scenarios"""
    print("\n🧪 Testing POST /api/enquiries")
    
    results = []
    
    # Test 1: Valid enquiry with all fields
    print("   Test 1: Valid enquiry with all fields")
    try:
        payload = {
            "name": "Priya Sharma",
            "email": "priya.sharma@brandstudio.com",
            "org": "Creative Brand Studio",
            "message": "We'd love to collaborate with Neha for a luxury fashion brand campaign. Her aesthetic perfectly aligns with our vision."
        }
        response = requests.post(f"{API_BASE_URL}/enquiries", json=payload)
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: {data}")
            required_fields = ['id', 'name', 'email', 'org', 'message', 'created_at']
            if all(key in data for key in required_fields):
                print("   ✅ Valid enquiry created successfully")
                results.append(True)
            else:
                print(f"   ❌ Missing required fields in response")
                results.append(False)
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            print(f"   Response: {response.text}")
            results.append(False)
    except Exception as e:
        print(f"   ❌ Error: {e}")
        results.append(False)
    
    # Test 2: Valid enquiry without org (optional field)
    print("   Test 2: Valid enquiry without org field")
    try:
        payload = {
            "name": "Arjun Mehta",
            "email": "arjun@filmproductions.in",
            "message": "Interested in discussing a potential collaboration for an upcoming commercial project."
        }
        response = requests.post(f"{API_BASE_URL}/enquiries", json=payload)
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: {data}")
            print("   ✅ Enquiry without org created successfully")
            results.append(True)
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            print(f"   Response: {response.text}")
            results.append(False)
    except Exception as e:
        print(f"   ❌ Error: {e}")
        results.append(False)
    
    # Test 3: Missing required field (message)
    print("   Test 3: Missing required field (message)")
    try:
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "org": "Test Org"
        }
        response = requests.post(f"{API_BASE_URL}/enquiries", json=payload)
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 422:
            print("   ✅ Correctly rejected missing message field")
            results.append(True)
        else:
            print(f"   ❌ Expected 422, got {response.status_code}")
            print(f"   Response: {response.text}")
            results.append(False)
    except Exception as e:
        print(f"   ❌ Error: {e}")
        results.append(False)
    
    # Test 4: Invalid email
    print("   Test 4: Invalid email format")
    try:
        payload = {
            "name": "Test User",
            "email": "not-an-email",
            "org": "Test Org",
            "message": "Test message"
        }
        response = requests.post(f"{API_BASE_URL}/enquiries", json=payload)
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 422:
            print("   ✅ Correctly rejected invalid email")
            results.append(True)
        else:
            print(f"   ❌ Expected 422, got {response.status_code}")
            print(f"   Response: {response.text}")
            results.append(False)
    except Exception as e:
        print(f"   ❌ Error: {e}")
        results.append(False)
    
    # Test 5: Empty name
    print("   Test 5: Empty name field")
    try:
        payload = {
            "name": "",
            "email": "test@example.com",
            "org": "Test Org",
            "message": "Test message"
        }
        response = requests.post(f"{API_BASE_URL}/enquiries", json=payload)
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 422:
            print("   ✅ Correctly rejected empty name")
            results.append(True)
        else:
            print(f"   ❌ Expected 422, got {response.status_code}")
            print(f"   Response: {response.text}")
            results.append(False)
    except Exception as e:
        print(f"   ❌ Error: {e}")
        results.append(False)
    
    return all(results)

def test_enquiries_get():
    """Test GET /api/enquiries endpoint"""
    print("\n🧪 Testing GET /api/enquiries")
    try:
        response = requests.get(f"{API_BASE_URL}/enquiries")
        print(f"   Status: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: Found {len(data)} enquiries")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check if enquiries are sorted by created_at descending
                    first_enquiry = data[0]
                    required_fields = ['id', 'name', 'email', 'org', 'message', 'created_at']
                    if all(key in first_enquiry for key in required_fields):
                        print("   ✅ GET /api/enquiries working correctly")
                        
                        # Verify sorting (created_at descending)
                        if len(data) > 1:
                            first_time = datetime.fromisoformat(data[0]['created_at'].replace('Z', '+00:00'))
                            second_time = datetime.fromisoformat(data[1]['created_at'].replace('Z', '+00:00'))
                            if first_time >= second_time:
                                print("   ✅ Enquiries correctly sorted by created_at descending")
                            else:
                                print("   ⚠️  Enquiries may not be sorted correctly")
                        
                        return True
                    else:
                        print(f"   ❌ Missing required fields in enquiry response")
                        return False
                else:
                    print("   ✅ GET /api/enquiries working (empty list)")
                    return True
            else:
                print(f"   ❌ Expected list, got {type(data)}")
                return False
        else:
            print(f"   ❌ Expected 200, got {response.status_code}")
            print(f"   Response: {response.text}")
            return False
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def test_mongodb_persistence():
    """Test MongoDB persistence by creating an enquiry and then retrieving it"""
    print("\n🧪 Testing MongoDB Persistence")
    
    # Create a unique enquiry
    unique_message = f"Test persistence message at {datetime.now().isoformat()}"
    payload = {
        "name": "Persistence Test User",
        "email": "persistence@test.com",
        "org": "Test Persistence Org",
        "message": unique_message
    }
    
    try:
        # Create enquiry
        print("   Creating test enquiry...")
        post_response = requests.post(f"{API_BASE_URL}/enquiries", json=payload)
        
        if post_response.status_code != 200:
            print(f"   ❌ Failed to create enquiry: {post_response.status_code}")
            return False
        
        created_enquiry = post_response.json()
        enquiry_id = created_enquiry['id']
        print(f"   Created enquiry with ID: {enquiry_id}")
        
        # Retrieve all enquiries
        print("   Retrieving all enquiries...")
        get_response = requests.get(f"{API_BASE_URL}/enquiries")
        
        if get_response.status_code != 200:
            print(f"   ❌ Failed to retrieve enquiries: {get_response.status_code}")
            return False
        
        all_enquiries = get_response.json()
        
        # Find our created enquiry
        found_enquiry = None
        for enquiry in all_enquiries:
            if enquiry['id'] == enquiry_id:
                found_enquiry = enquiry
                break
        
        if found_enquiry:
            print("   ✅ MongoDB persistence working - enquiry found after creation")
            return True
        else:
            print("   ❌ MongoDB persistence failed - enquiry not found after creation")
            return False
            
    except Exception as e:
        print(f"   ❌ Error testing persistence: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Neha Nageswari Portfolio")
    print(f"🔗 Backend URL: {API_BASE_URL}")
    print("=" * 60)
    
    test_results = {}
    
    # Run all tests
    test_results['hello_world'] = test_hello_world()
    test_results['status_endpoints'] = test_status_endpoints()
    test_results['enquiries_post'] = test_enquiries_post()
    test_results['enquiries_get'] = test_enquiries_get()
    test_results['mongodb_persistence'] = test_mongodb_persistence()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("⚠️  Some tests failed - check details above")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)